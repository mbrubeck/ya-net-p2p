use crate::protocol::ProtocolId;
use crate::transport::{Address, TransportId};
use std::sync::Arc;

#[derive(thiserror::Error, Clone, Debug)]
pub enum NetworkError {
    #[error("no address provided")]
    NoAddress,
    #[error("unsupported address: {0:?}")]
    UnsupportedAddress(Address),
    #[error("unknown transport: {0}")]
    UnknownTransport(TransportId),
    #[error("invalid transport: {0}")]
    InvalidTransport(TransportId),
    #[error("unknown protocol: {0}")]
    UnknownProtocol(ProtocolId),
    #[error("not listening with transport: {0}")]
    NotListening(TransportId),
    #[error("no connection")]
    NoConnection,
    #[error("protocol error: {0}")]
    Protocol(String),
    #[error("transport error: {0}")]
    Transport(String),
    #[error("timeout")]
    Timeout,
}

#[derive(thiserror::Error, Clone, Debug)]
pub enum SessionError {
    #[error("key mismatch: expected {0:?}, received {1:?}")]
    KeyMismatch(Vec<u8>, Vec<u8>),
    #[error("disconnected")]
    Disconnected,
    #[error("terminated")]
    Terminated,
    #[error("timeout")]
    Timeout,
}

#[derive(thiserror::Error, Clone, Debug)]
pub enum DiscoveryError {
    #[error("timeout")]
    Timeout,
    #[error("not found")]
    NotFound,
}

#[derive(thiserror::Error, Clone, Debug)]
pub enum ProtocolError {
    #[error("invalid protocol id: {0}")]
    InvalidId(String),
    #[error("invalid protocol state: {0}")]
    InvalidState(String),
    #[error("call error: {0}")]
    Call(String),
}

#[derive(thiserror::Error, Clone, Debug)]
pub enum MessageError {
    #[error("codec error: {0}")]
    Codec(String),
    #[error("signature error: {0}")]
    Signature(String),
    #[error("missing auth")]
    MissingAuth,
    #[error("invalid auth")]
    InvalidAuth,
    #[error("missing signature")]
    MissingSignature,
    #[error("unsupported signature")]
    UnsupportedSignature,
}

#[derive(thiserror::Error, Clone, Debug)]
pub enum ChannelError {
    #[error("timeout")]
    Timeout,
    #[error("channel full")]
    Full,
    #[error("channel closed")]
    Closed,
}

#[derive(thiserror::Error, Clone, Debug)]
pub enum CryptoError {
    #[error("invalid key: {0}")]
    InvalidKey(String),
    #[error("invalid scheme")]
    InvalidScheme,
    #[error("cipher error: {0}")]
    CipherError(String),
}

#[derive(thiserror::Error, Clone, Debug)]
pub enum Error {
    #[error("service error: {0}")]
    Service(String),
    #[error("message error: {0}")]
    Message(#[from] MessageError),
    #[error("network error: {0}")]
    Network(#[from] NetworkError),
    #[error("protocol error: {0}")]
    Protocol(#[from] ProtocolError),
    #[error("session error: {0}")]
    Session(#[from] SessionError),
    #[error("discovery error: {0}")]
    Discovery(#[from] DiscoveryError),
    #[error("sign: {0}")]
    Sign(#[from] Arc<ethsign::Error>),
    #[error("channel error: {0}")]
    Channel(#[from] ChannelError),
    #[error("crypto error: {0}")]
    Crypto(#[from] CryptoError),
    #[error("signature error: {0}")]
    Signature(String),
}

impl From<ethsign::Error> for Error {
    fn from(e: ethsign::Error) -> Self {
        Error::Sign(e.into())
    }
}

impl Error {
    pub fn sig(e: impl ToString) -> Self {
        MessageError::Signature(e.to_string()).into()
    }

    pub fn protocol(e: impl ToString) -> Self {
        NetworkError::Protocol(e.to_string()).into()
    }

    pub fn protocol_state(e: impl ToString) -> Self {
        ProtocolError::InvalidState(e.to_string()).into()
    }

    pub fn key(e: impl ToString) -> Self {
        CryptoError::InvalidKey(e.to_string()).into()
    }

    pub fn key_mismatch<A: AsRef<[u8]>, B: AsRef<[u8]>>(a: A, b: B) -> Self {
        SessionError::KeyMismatch(a.as_ref().to_vec(), b.as_ref().to_vec()).into()
    }
}

impl From<actix::MailboxError> for Error {
    fn from(err: actix::MailboxError) -> Self {
        ChannelError::from(err).into()
    }
}

impl From<futures::channel::mpsc::SendError> for Error {
    fn from(err: futures::channel::mpsc::SendError) -> Self {
        ChannelError::from(err).into()
    }
}

impl From<futures::channel::mpsc::SendError> for ChannelError {
    fn from(err: futures::channel::mpsc::SendError) -> Self {
        if err.is_full() {
            ChannelError::Full
        } else {
            ChannelError::Closed
        }
    }
}

impl<T> From<crossbeam_channel::SendError<T>> for Error {
    fn from(err: crossbeam_channel::SendError<T>) -> Self {
        ChannelError::from(err).into()
    }
}

impl<T> From<crossbeam_channel::SendError<T>> for ChannelError {
    fn from(_: crossbeam_channel::SendError<T>) -> Self {
        ChannelError::Closed
    }
}

impl From<actix::MailboxError> for ChannelError {
    fn from(err: actix::MailboxError) -> Self {
        match err {
            actix::MailboxError::Timeout => ChannelError::Timeout,
            actix::MailboxError::Closed => ChannelError::Closed,
        }
    }
}
