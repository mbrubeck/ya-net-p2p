use crate::{message, Error, Key, KeyLen, Result};
use std::convert::TryFrom;
use std::net::{IpAddr, SocketAddr, SocketAddrV4, SocketAddrV6};

#[derive(Clone, Eq, PartialEq, Hash)]
pub struct Node<N: KeyLen> {
    pub key: Key<N>,
    pub address: SocketAddr,
}

impl<N: KeyLen> Node<N> {
    #[inline(always)]
    pub fn distance(&self, other: &Self) -> Key<N> {
        self.key.distance(&other.key)
    }
}

impl<N: KeyLen> std::fmt::Debug for Node<N> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_fmt(format_args!(
            "Node {{ key: {}, address: {:?} }}",
            hex::encode(&self.key),
            self.address
        ))
    }
}

impl<N: KeyLen> TryFrom<message::Node> for Node<N> {
    type Error = Error;

    fn try_from(node: message::Node) -> Result<Self> {
        if node.key.len() > N::to_usize() {
            return Err(Error::InvalidKeyLength(node.key.len()));
        }

        Ok(Node {
            key: Key::<N>::try_from(node.key)?,
            address: match node.ip {
                Some(node_ip) => match node_ip {
                    message::node::Ip::V4(ip) => {
                        SocketAddr::from(SocketAddrV4::new(ip.into(), node.port as u16))
                    }
                    message::node::Ip::V6(v6) => {
                        let mut ip = (v6.hi << 64) as u128;
                        ip |= v6.lo as u128;

                        SocketAddr::from(SocketAddrV6::new(ip.into(), node.port as u16, 0, 0))
                    }
                },
                None => return Err(Error::property("Node", "ip == None")),
            },
        })
    }
}

impl<N: KeyLen> From<Node<N>> for message::Node {
    fn from(node: Node<N>) -> Self {
        message::Node {
            ip: match node.address.ip() {
                IpAddr::V4(v4) => {
                    let ip: u32 = v4.into();
                    Some(message::node::Ip::V4(ip))
                }
                IpAddr::V6(v6) => {
                    let ip: u128 = v6.into();
                    let hi = (ip >> 64) as u64;
                    let lo = ip as u64;
                    Some(message::node::Ip::V6(message::IpV6 { hi, lo }))
                }
            },
            port: node.address.port() as u32,
            key: node.key.as_ref().to_vec(),
        }
    }
}
