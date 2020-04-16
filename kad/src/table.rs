use crate::{Key, KeyLen, Node};
use chrono::{DateTime, Duration, Utc};
use serde::{Deserialize, Serialize};

const BUCKET_REFRESH_INTERVAL: i64 = 3600;

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Table<N: KeyLen> {
    pub key: Key<N>,
    buckets: Vec<Bucket<N>>,
    pub table_size: usize,
    pub bucket_size: usize,
}

impl<N: KeyLen + 'static> Table<N> {
    pub fn new(key: Key<N>) -> Self {
        Self::with_size(key, N::to_usize() * 8, N::to_usize())
    }

    pub fn with_size(key: Key<N>, table_size: usize, bucket_size: usize) -> Self {
        let buckets = vec![Bucket::new(bucket_size)];
        Table {
            key,
            buckets,
            table_size,
            bucket_size,
        }
    }

    pub fn add(&mut self, node: &Node<N>) -> bool {
        let idx = self.bucket_index(&node.key);
        let len = self.buckets.len();
        let bucket = &mut self.buckets[idx];

        if node.key == self.key || bucket.add(node) {
            true
        // middle bucket
        } else if idx != len - 1 {
            let furthest_key = match bucket.furthest(&self.key) {
                Some(node) => node.key.clone(),
                None => return false,
            };
            if furthest_key.distance(&self.key) >= node.distance(&self.key) {
                bucket.remove(&furthest_key);
                return bucket.add(node);
            }

            bucket.queue.push(node.clone());
            false
        // table full
        } else if len == self.table_size {
            false
        // split the last bucket
        } else {
            self.split(idx);
            self.add(node)
        }
    }

    #[inline]
    pub fn extend<'l, I: Iterator<Item = &'l Node<N>>>(&mut self, iter: I) {
        iter.for_each(|n| {
            self.add(&n);
        });
    }

    #[inline]
    pub fn remove(&mut self, key: &Key<N>) {
        let idx = self.bucket_index(&key);
        self.buckets[idx].remove(key)
    }

    #[inline]
    pub fn contains(&self, node: &Node<N>) -> bool {
        self.buckets[self.bucket_index(&node.key)].contains(node)
    }

    #[inline]
    pub fn get(&self, key: &Key<N>) -> Option<&Node<N>> {
        self.buckets[self.bucket_index(&key)].get(key)
    }

    pub fn neighbors(
        &self,
        key: &Key<N>,
        excluded: Option<&Key<N>>,
        max: Option<usize>,
    ) -> Vec<Node<N>> {
        let max = max.unwrap_or(self.bucket_size);
        let mut result = Vec::new();

        let _ = AlternatingIter::new(self.bucket_index(key), self.buckets.len()).try_fold(
            0 as usize,
            |acc, i| {
                result.extend(
                    self.buckets[i]
                        .as_ref()
                        .iter()
                        .filter(|n| Some(&n.key) != excluded)
                        .take(max - acc)
                        .cloned(),
                );

                if result.len() == max {
                    Err(())
                } else {
                    Ok(result.len())
                }
            },
        );

        result.sort_by_key(|n| key.distance(n));
        result
    }

    #[inline]
    pub fn stale_buckets(&self) -> Vec<usize> {
        self.buckets
            .iter()
            .enumerate()
            .filter(|(_, b)| b.stale())
            .map(|(i, _)| i)
            .collect()
    }

    #[inline]
    pub fn distant_nodes(&self, key: &Key<N>) -> Vec<Node<N>> {
        let idx = self.bucket_index(key);
        if idx == self.buckets.len() - 1 {
            Vec::new()
        } else {
            self.buckets[idx + 1..]
                .iter()
                .filter_map(|b| b.oldest().cloned())
                .collect()
        }
    }

    #[inline]
    pub fn bucket_oldest(&self, key: &Key<N>) -> Option<Node<N>> {
        let idx = self.bucket_index(key);
        self.buckets[idx].oldest().cloned()
    }

    #[inline]
    fn bucket_index(&self, key: &Key<N>) -> usize {
        let distance = self.key.distance(&key).leading_zeros();
        std::cmp::min(distance, self.buckets.len() - 1)
    }

    #[inline]
    fn split(&mut self, idx: usize) {
        let queue = std::mem::replace(&mut self.buckets[idx].queue, Vec::new());
        let bucket = self.buckets[idx].split(&self.key, idx);

        self.buckets.insert(idx + 1, bucket);
        self.extend(queue.iter());
    }
}

struct AlternatingIter {
    start: usize,
    len: usize,
    idx: Option<usize>,
}

impl AlternatingIter {
    pub fn new(start: usize, len: usize) -> Self {
        AlternatingIter {
            start,
            len,
            idx: None,
        }
    }
}

impl Iterator for AlternatingIter {
    type Item = usize;

    fn next(&mut self) -> Option<Self::Item> {
        match self.idx {
            None => {
                self.idx.replace(self.start);
            }
            Some(idx) => {
                if idx > self.start {
                    let di = idx - self.start;
                    if di <= self.start {
                        self.idx.replace(self.start - di);
                    } else if idx < self.len - 1 {
                        self.idx.replace(idx + 1);
                    } else {
                        return None;
                    }
                } else {
                    let di = self.start - idx;
                    if self.start + di + 1 < self.len {
                        self.idx.replace(self.start + di + 1);
                    } else if idx > 0 {
                        self.idx.replace(idx - 1);
                    } else {
                        return None;
                    }
                }
            }
        }

        self.idx.clone()
    }
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Bucket<N: KeyLen> {
    updated: DateTime<Utc>,
    nodes: Vec<Node<N>>,
    queue: Vec<Node<N>>,
    size: usize,
}

impl<N: KeyLen> Bucket<N> {
    fn new(size: usize) -> Self {
        Self::with_nodes(Vec::with_capacity(size), size)
    }

    fn with_nodes(nodes: Vec<Node<N>>, size: usize) -> Self {
        Bucket {
            updated: Utc::now(),
            nodes,
            queue: Vec::new(),
            size,
        }
    }

    #[inline(always)]
    pub fn oldest(&self) -> Option<&Node<N>> {
        self.nodes.get(0)
    }

    #[inline(always)]
    pub fn furthest(&self, key: &Key<N>) -> Option<&Node<N>> {
        self.nodes.iter().max_by_key(|n| n.distance(key))
    }

    #[inline(always)]
    pub fn stale(&self) -> bool {
        Utc::now() - self.updated > Duration::seconds(BUCKET_REFRESH_INTERVAL)
    }

    #[inline(always)]
    fn contains(&self, node: &Node<N>) -> bool {
        self.nodes.contains(node)
    }

    fn get(&self, key: &Key<N>) -> Option<&Node<N>> {
        match self.nodes.iter().position(|node| &node.key == key) {
            Some(idx) => Some(&self.nodes[idx]),
            None => None,
        }
    }

    fn add(&mut self, node: &Node<N>) -> bool {
        self.updated = Utc::now();

        self.remove(&node.key);
        if self.nodes.len() < self.size {
            self.nodes.push(node.clone());
            return true;
        }

        false
    }

    fn remove(&mut self, key: &Key<N>) {
        if let Some(idx) = self.nodes.iter().position(|node| &node.key == key) {
            self.nodes.remove(idx);
            if let Some(queued) = self.queue.pop() {
                self.add(&queued);
            }
        }
    }

    fn split(&mut self, key: &Key<N>, idx: usize) -> Bucket<N> {
        let nodes = std::mem::replace(&mut self.nodes, Vec::new());
        let (retain, split) = nodes
            .into_iter()
            .partition(|node| node.distance(key).leading_zeros() == idx);
        std::mem::replace(&mut self.nodes, retain);
        Bucket::with_nodes(split, self.size)
    }
}

impl<N: KeyLen> AsRef<[Node<N>]> for Bucket<N> {
    fn as_ref(&self) -> &[Node<N>] {
        &self.nodes
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn iter() {
        fn gather(iter: impl Iterator<Item = usize>, vec: &Vec<[i32; 3]>) -> Vec<i32> {
            iter.map(|i| vec.get(i).unwrap())
                .flatten()
                .cloned()
                .collect()
        }

        let vec: Vec<[i32; 3]> = vec![];
        let iter = AlternatingIter::new(0, vec.len());
        assert_eq!(vec![0], iter.collect::<Vec<_>>());

        let vec = vec![[1, 2, 3]];
        let iter = AlternatingIter::new(0, vec.len());
        assert_eq!(gather(iter, &vec), (1..4).collect::<Vec<_>>());

        let vec = vec![[1, 2, 3], [4, 5, 6]];
        let iter = AlternatingIter::new(0, vec.len());
        assert_eq!(gather(iter, &vec), (1..7).collect::<Vec<_>>());

        let vec = vec![[4, 5, 6], [1, 2, 3]];
        let iter = AlternatingIter::new(1, vec.len());
        assert_eq!(gather(iter, &vec), (1..7).collect::<Vec<_>>());

        let vec = vec![[13, 14, 15], [7, 8, 9], [1, 2, 3], [4, 5, 6], [10, 11, 12]];
        let iter = AlternatingIter::new(2, vec.len());
        assert_eq!(gather(iter, &vec), (1..16).collect::<Vec<_>>());
    }
}
