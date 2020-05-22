(function() {var implementors = {};
implementors["ya_net_p2p"] = [{"text":"impl&lt;Key, Crypto, E&gt; Handler&lt;<a class=\"enum\" href=\"ya_net_p2p/event/enum.ProcessCmd.html\" title=\"enum ya_net_p2p::event::ProcessCmd\">ProcessCmd</a>&lt;Key&gt;&gt; for <a class=\"struct\" href=\"ya_net_p2p/packet/processor/crypto/struct.CryptoProcessor.html\" title=\"struct ya_net_p2p::packet::processor::crypto::CryptoProcessor\">CryptoProcessor</a>&lt;Key, Crypto&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;, Error = E&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Crypto: <a class=\"trait\" href=\"ya_net_p2p/crypto/trait.Crypto.html\" title=\"trait ya_net_p2p::crypto::Crypto\">Crypto</a>&lt;Key&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"ya_net_p2p/error/enum.Error.html\" title=\"enum ya_net_p2p::error::Error\">Error</a>&gt;,&nbsp;</span>","synthetic":false,"types":["ya_net_p2p::packet::processor::crypto::CryptoProcessor"]},{"text":"impl&lt;N, D&gt; Handler&lt;<a class=\"enum\" href=\"ya_net_p2p/event/enum.DhtCmd.html\" title=\"enum ya_net_p2p::event::DhtCmd\">DhtCmd</a>&lt;Key&lt;N&gt;&gt;&gt; for <a class=\"struct\" href=\"ya_net_p2p/protocol/kad/struct.KadProtocol.html\" title=\"struct ya_net_p2p::protocol::kad::KadProtocol\">KadProtocol</a>&lt;N, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: KeyLen + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ArrayLength&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;::ArrayType: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ya_net_p2p/protocol/kad/trait.NodeDataExt.html\" title=\"trait ya_net_p2p::protocol::kad::NodeDataExt\">NodeDataExt</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ya_net_p2p::protocol::kad::KadProtocol"]},{"text":"impl&lt;N, D&gt; Handler&lt;<a class=\"enum\" href=\"ya_net_p2p/event/enum.ProtocolCmd.html\" title=\"enum ya_net_p2p::event::ProtocolCmd\">ProtocolCmd</a>&lt;Key&lt;N&gt;&gt;&gt; for <a class=\"struct\" href=\"ya_net_p2p/protocol/kad/struct.KadProtocol.html\" title=\"struct ya_net_p2p::protocol::kad::KadProtocol\">KadProtocol</a>&lt;N, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: KeyLen + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ArrayLength&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;::ArrayType: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ya_net_p2p/protocol/kad/trait.NodeDataExt.html\" title=\"trait ya_net_p2p::protocol::kad::NodeDataExt\">NodeDataExt</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ya_net_p2p::protocol::kad::KadProtocol"]},{"text":"impl&lt;Key, E&gt; Handler&lt;<a class=\"enum\" href=\"ya_net_p2p/event/enum.SessionCmd.html\" title=\"enum ya_net_p2p::event::SessionCmd\">SessionCmd</a>&lt;Key&gt;&gt; for <a class=\"struct\" href=\"ya_net_p2p/protocol/session/struct.SessionProtocol.html\" title=\"struct ya_net_p2p::protocol::session::SessionProtocol\">SessionProtocol</a>&lt;Key&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;, Error = E&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"ya_net_p2p/error/enum.Error.html\" title=\"enum ya_net_p2p::error::Error\">Error</a>&gt; + 'static,&nbsp;</span>","synthetic":false,"types":["ya_net_p2p::protocol::session::SessionProtocol"]},{"text":"impl&lt;Key, E&gt; Handler&lt;<a class=\"enum\" href=\"ya_net_p2p/event/enum.ProtocolCmd.html\" title=\"enum ya_net_p2p::event::ProtocolCmd\">ProtocolCmd</a>&lt;Key&gt;&gt; for <a class=\"struct\" href=\"ya_net_p2p/protocol/session/struct.SessionProtocol.html\" title=\"struct ya_net_p2p::protocol::session::SessionProtocol\">SessionProtocol</a>&lt;Key&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;, Error = E&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"ya_net_p2p/error/enum.Error.html\" title=\"enum ya_net_p2p::error::Error\">Error</a>&gt; + 'static,&nbsp;</span>","synthetic":false,"types":["ya_net_p2p::protocol::session::SessionProtocol"]},{"text":"impl&lt;Ctx&gt; Handler&lt;<a class=\"enum\" href=\"ya_net_p2p/event/enum.TransportCmd.html\" title=\"enum ya_net_p2p::event::TransportCmd\">TransportCmd</a>&gt; for <a class=\"struct\" href=\"ya_net_p2p/transport/laminar/struct.LaminarTransport.html\" title=\"struct ya_net_p2p::transport::laminar::LaminarTransport\">LaminarTransport</a>&lt;Ctx&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ctx: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ya_net_p2p::transport::laminar::LaminarTransport"]},{"text":"impl&lt;Key&gt; Handler&lt;<a class=\"enum\" href=\"ya_net_p2p/event/enum.ServiceCmd.html\" title=\"enum ya_net_p2p::event::ServiceCmd\">ServiceCmd</a>&lt;Key&gt;&gt; for <a class=\"struct\" href=\"ya_net_p2p/struct.Net.html\" title=\"struct ya_net_p2p::Net\">Net</a>&lt;Key&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ya_net_p2p::service::Net"]},{"text":"impl&lt;Key&gt; Handler&lt;<a class=\"enum\" href=\"ya_net_p2p/event/enum.SendCmd.html\" title=\"enum ya_net_p2p::event::SendCmd\">SendCmd</a>&lt;Key&gt;&gt; for <a class=\"struct\" href=\"ya_net_p2p/struct.Net.html\" title=\"struct ya_net_p2p::Net\">Net</a>&lt;Key&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ya_net_p2p::service::Net"]},{"text":"impl&lt;Key&gt; Handler&lt;<a class=\"enum\" href=\"ya_net_p2p/event/enum.TransportEvt.html\" title=\"enum ya_net_p2p::event::TransportEvt\">TransportEvt</a>&gt; for <a class=\"struct\" href=\"ya_net_p2p/struct.Net.html\" title=\"struct ya_net_p2p::Net\">Net</a>&lt;Key&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ya_net_p2p::service::Net"]},{"text":"impl&lt;Key&gt; Handler&lt;<a class=\"enum\" href=\"ya_net_p2p/event/enum.SessionEvt.html\" title=\"enum ya_net_p2p::event::SessionEvt\">SessionEvt</a>&lt;Key&gt;&gt; for <a class=\"struct\" href=\"ya_net_p2p/struct.Net.html\" title=\"struct ya_net_p2p::Net\">Net</a>&lt;Key&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ya_net_p2p::service::Net"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()