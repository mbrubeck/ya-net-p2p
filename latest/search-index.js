var searchIndex={};
searchIndex["ya_net_p2p"] = {"doc":"","i":[[3,"NetConfig","ya_net_p2p","",null,null],[3,"Net","","",null,null],[0,"crypto","","",null,null],[4,"Signature","ya_net_p2p::crypto","",null,null],[13,"ECDSA","","",0,null],[4,"SignatureECDSA","","",null,null],[13,"P256K1","","",1,null],[12,"data","ya_net_p2p::crypto::SignatureECDSA","",2,null],[12,"key","","",2,null],[5,"verify_secp256k1","ya_net_p2p::crypto","",null,[[["asref"],["option"],["signature"]],[["result",["bool"]],["bool"]]]],[8,"Crypto","","",null,null],[18,"SIGNATURE_SIZE","","",3,null],[10,"encrypt","","",3,[[["asref"],["key"],["self"]],[["localboxfuture",["result"]],["result",["vec"]]]]],[10,"decrypt","","",3,[[["asref"],["key"],["self"]],[["localboxfuture",["result"]],["result",["vec"]]]]],[10,"sign","","",3,[[["u8"],["key"],["vec",["u8"]],["self"]],[["result",["signature"]],["localboxfuture",["result"]]]]],[10,"verify","","",3,[[["asref"],["option"],["self"],["signature"]],[["result",["bool"]],["bool"]]]],[11,"data","","",0,[[["self"]],["vec"]]],[11,"key","","",0,[[["self"]],[["option",["vec"]],["vec",["u8"]]]]],[11,"set_key","","",0,[[["self"],["vec",["u8"]],["u8"]]]],[11,"data","","",1,[[["self"]],["vec"]]],[11,"key","","",1,[[["self"]],[["option",["vec"]],["vec",["u8"]]]]],[11,"set_key","","",1,[[["self"],["vec",["u8"]],["u8"]]]],[0,"error","ya_net_p2p","",null,null],[4,"NetworkError","ya_net_p2p::error","",null,null],[13,"NoAddress","","",4,null],[13,"UnsupportedAddress","","",4,null],[13,"UnknownTransport","","",4,null],[13,"InvalidTransport","","",4,null],[13,"UnknownProtocol","","",4,null],[13,"NotListening","","",4,null],[13,"NoConnection","","",4,null],[13,"Protocol","","",4,null],[13,"Transport","","",4,null],[13,"Timeout","","",4,null],[4,"SessionError","","",null,null],[13,"KeyMismatch","","",5,null],[13,"Disconnected","","",5,null],[13,"Terminated","","",5,null],[13,"Timeout","","",5,null],[4,"DiscoveryError","","",null,null],[13,"Timeout","","",6,null],[13,"NotFound","","",6,null],[4,"ProtocolError","","",null,null],[13,"InvalidId","","",7,null],[13,"InvalidState","","",7,null],[13,"Call","","",7,null],[4,"MessageError","","",null,null],[13,"Codec","","",8,null],[13,"Signature","","",8,null],[13,"MissingAuth","","",8,null],[13,"MissingSignature","","",8,null],[13,"UnsupportedSignature","","",8,null],[4,"ChannelError","","",null,null],[13,"Timeout","","",9,null],[13,"Full","","",9,null],[13,"Closed","","",9,null],[4,"CryptoError","","",null,null],[13,"InvalidKey","","",10,null],[13,"InvalidScheme","","",10,null],[4,"Error","","",null,null],[13,"Service","","",11,null],[13,"Message","","",11,null],[13,"Network","","",11,null],[13,"Protocol","","",11,null],[13,"Session","","",11,null],[13,"Discovery","","",11,null],[13,"Sign","","",11,null],[13,"Channel","","",11,null],[13,"Crypto","","",11,null],[13,"Signature","","",11,null],[11,"sig","","",11,[[],["self"]]],[11,"protocol","","",11,[[],["self"]]],[11,"protocol_state","","",11,[[],["self"]]],[11,"key","","",11,[[],["self"]]],[11,"key_mismatch","","",11,[[["asref"]],["self"]]],[0,"event","ya_net_p2p","",null,null],[4,"ServiceCmd","ya_net_p2p::event","",null,null],[13,"SetSessionProtocol","","",12,null],[13,"SetDhtProtocol","","",12,null],[13,"AddTransport","","",12,null],[13,"RemoveTransport","","",12,null],[13,"AddProtocol","","",12,null],[13,"RemoveProtocol","","",12,null],[13,"AddProcessor","","",12,null],[13,"RemoveProcessor","","",12,null],[13,"Shutdown","","",12,null],[4,"SendCmd","","",null,null],[13,"Roaming","","",13,null],[12,"from","ya_net_p2p::event::SendCmd","",14,null],[12,"to","","",14,null],[12,"packet","","",14,null],[13,"Session","ya_net_p2p::event","",13,null],[12,"from","ya_net_p2p::event::SendCmd","",15,null],[12,"to","","",15,null],[12,"packet","","",15,null],[13,"Broadcast","ya_net_p2p::event","",13,null],[12,"from","ya_net_p2p::event::SendCmd","",16,null],[12,"packet","","",16,null],[13,"Disconnect","ya_net_p2p::event","",13,null],[4,"TransportCmd","","",null,null],[13,"Bind","","",17,null],[13,"Shutdown","","",17,null],[13,"Connect","","",17,null],[13,"Disconnect","","",17,null],[13,"Packet","","",17,null],[4,"ProtocolCmd","","",null,null],[13,"RoamingPacket","","",18,null],[13,"SessionPacket","","",18,null],[13,"Shutdown","","",18,null],[4,"SessionCmd","","",null,null],[13,"Initiate","","",19,null],[13,"Disconnect","","",19,null],[4,"DhtCmd","","",null,null],[13,"ResolveNode","","",20,null],[13,"ResolveValue","","",20,null],[13,"PublishValue","","",20,null],[13,"Bootstrap","","",20,null],[4,"DhtResponse","","",null,null],[13,"Addresses","","",21,null],[13,"Value","","",21,null],[13,"Empty","","",21,null],[4,"ProcessCmd","","",null,null],[13,"Outbound","","",22,null],[12,"from","ya_net_p2p::event::ProcessCmd","",23,null],[12,"to","","",23,null],[12,"packet","","",23,null],[13,"Inbound","ya_net_p2p::event","",22,null],[12,"from","ya_net_p2p::event::ProcessCmd","",24,null],[12,"to","","",24,null],[12,"packet","","",24,null],[4,"TransportEvt","ya_net_p2p::event","",null,null],[13,"Connected","","",25,null],[13,"Disconnected","","",25,null],[13,"Packet","","",25,null],[4,"SessionEvt","","",null,null],[13,"Established","","",26,null],[13,"Disconnected","","",26,null],[4,"DisconnectReason","","",null,null],[13,"Timeout","","",27,null],[13,"InvalidProtocol","","",27,null],[13,"InvalidProtocolVersion","","",27,null],[13,"Shutdown","","",27,null],[13,"Other","","",27,null],[11,"into_addresses","","",21,[[],[["result",["vec"]],["vec",["address"]]]]],[11,"into_value","","",21,[[],[["result",["vec"]],["vec",["u8"]]]]],[0,"packet","ya_net_p2p","",null,null],[3,"Payload","ya_net_p2p::packet","",null,null],[12,"signature","","",28,null],[3,"Packet","","",null,null],[12,"guarantees","","",29,null],[12,"payload","","",29,null],[3,"WirePacket","","",null,null],[12,"guarantees","","",30,null],[12,"message","","",30,null],[3,"AddressedPacket","","",null,null],[12,"address","","",31,null],[12,"encoded","","",31,null],[3,"Guarantees","","",null,null],[12,"delivery","","",32,null],[12,"ordering","","",32,null],[4,"DeliveryType","","",null,null],[13,"Acknowledged","","",33,null],[13,"Unacknowledged","","",33,null],[4,"OrderingType","","",null,null],[13,"Unordered","","",34,null],[13,"Ordered","","",34,null],[12,"stream_id","ya_net_p2p::packet::OrderingType","",35,null],[13,"Sequenced","ya_net_p2p::packet","",34,null],[12,"stream_id","ya_net_p2p::packet::OrderingType","",36,null],[11,"new","ya_net_p2p::packet","",28,[[["protocolid"]],["self"]]],[11,"is_relayed","","",28,[[["self"]],["bool"]]],[11,"is_signed","","",28,[[["self"]],["bool"]]],[11,"is_encrypted","","",28,[[["self"]],["bool"]]],[11,"protocol_id","","",28,[[["self"]],["protocolid"]]],[11,"relay","","",28,[[["self"]],[["option",["vec"]],["vec"]]]],[11,"signature","","",28,[[["self"]],[["option",["signature"]],["signature"]]]],[11,"payload","","",28,[[["self"]],["bytespayload"]]],[11,"decode_payload","","",28,[[["self"]],[["result"],["deserializeowned"]]]],[11,"signature_data","","",28,[[["self"]],[["vec",["u8"]],["u8"]]]],[11,"with_relaying","","",28,[[["vec",["u8"]],["u8"]],["self"]]],[11,"with_signature","","",28,[[],["self"]]],[11,"with_encryption","","",28,[[],["self"]]],[11,"with_payload","","",28,[[["vec",["u8"]],["u8"]],["self"]]],[11,"encode_payload","","",28,[[["p"]],["result"]]],[0,"processor","","",null,null],[0,"crypto","ya_net_p2p::packet::processor","",null,null],[3,"CryptoProcessor","ya_net_p2p::packet::processor::crypto","",null,null],[11,"new","","",37,[[["key"],["crypto"]],["self"]]],[11,"addressed","ya_net_p2p::packet","",30,[[["address"]],["addressedpacket"]]],[11,"addressed_with","","",30,[[["transportid"],["socketaddr"]],["addressedpacket"]]],[11,"try_decode","","",30,[[],[["result",["packet"]],["packet"]]]],[11,"ordered","","",32,[[["option",["streamid"]],["streamid"]],["self"]]],[11,"ordered_default","","",32,[[],["self"]]],[11,"unordered","","",32,[[],["self"]]],[11,"stream","","",32,[[["option",["streamid"]],["streamid"]],["self"]]],[11,"fire_and_forget","","",32,[[],["self"]]],[0,"protocol","ya_net_p2p","",null,null],[0,"kad","ya_net_p2p::protocol","",null,null],[3,"KadProtocol","ya_net_p2p::protocol::kad","",null,null],[8,"NodeDataExt","","",null,null],[10,"from_address","","",38,[[["address"]],["self"]]],[10,"primary_address","","",38,[[["self"]],[["option",["address"]],["address"]]]],[10,"addresses","","",38,[[["self"]],[["vec",["address"]],["address"]]]],[11,"new","","",39,[[["node"],["r"]],["self"]]],[11,"with_config","","",39,[[["kadconfig"],["node"],["r"]],["self"]]],[0,"session","ya_net_p2p::protocol","",null,null],[3,"ProtocolConfig","ya_net_p2p::protocol::session","",null,null],[3,"SessionProtocol","","",null,null],[11,"new","","",40,[[["s"],["r"]],["self"]]],[11,"with_config","","",40,[[["protocolconfig"],["s"],["r"]],["self"]]],[6,"ProtocolId","ya_net_p2p::protocol","",null,null],[8,"Protocol","","",null,null],[18,"PROTOCOL_ID","","",41,null],[0,"transport","ya_net_p2p","",null,null],[3,"Address","ya_net_p2p::transport","",null,null],[12,"transport_id","","",42,null],[12,"socket_addr","","",42,null],[0,"connection","","",null,null],[3,"Connection","ya_net_p2p::transport::connection","",null,null],[12,"id","","",43,null],[12,"address","","",43,null],[12,"created","","",43,null],[3,"ConnectionManager","","",null,null],[4,"PendingConnection","","",null,null],[13,"New","","",44,null],[13,"Pending","","",44,null],[13,"Established","","",44,null],[6,"ConnectionId","","",null,null],[6,"ConnectionFut","","",null,null],[11,"new","","",43,[[["sender",["addressedpacket"]],["address"],["addressedpacket"]],["self"]]],[11,"send","","",43,[[["self"],["wirepacket"],["into",["wirepacket"]]]]],[11,"ctx","","",43,[[["self"]],["option"]]],[11,"set_ctx","","",43,[[["self"],["ctx"]]]],[11,"get","","",45,[[["self"],["address"]],[["option",["connection"]],["connection"]]]],[11,"connected","","",45,[[["address"],["sender",["addressedpacket"]],["self"],["addressedpacket"]]]],[11,"disconnected","","",45,[[["self"],["address"]],[["connection"],["option",["connection"]]]]],[11,"pending","","",45,[[["self"],["address"]],["pendingconnection"]]],[11,"prune_pending","","",45,[[["self"],["duration"]]]],[0,"laminar","ya_net_p2p::transport","",null,null],[3,"TransportConfig","ya_net_p2p::transport::laminar","",null,null],[3,"LaminarTransport","","",null,null],[11,"default_laminar_config","","",46,[[],["config"]]],[11,"new","","",47,[[["r"]],["self"]]],[11,"with_config","","",47,[[["r"],["transportconfig"]],["self"]]],[6,"TransportId","ya_net_p2p::transport","",null,null],[6,"StreamId","","",null,null],[8,"Transport","","",null,null],[18,"TRANSPORT_ID","","",48,null],[18,"ANY_TRANSPORT","","",42,null],[18,"TCP","","",42,null],[18,"UDP","","",42,null],[18,"LAMINAR","","",42,null],[11,"new","","",42,[[["transportid"],["socketaddr"]],["self"]]],[11,"is_transport","","",42,[[["self"],["transportid"]],["bool"]]],[11,"new","ya_net_p2p","",49,[[["vec",["socketaddr"]],["socketaddr"]],["self"]]],[11,"with_config","","",49,[[["vec",["socketaddr"]],["netconfig"],["socketaddr"]],["self"]]],[6,"Result","","",null,null],[8,"NetAddrExt","","",null,null],[10,"add_processor","","",50,[[["a"],["self"]],[["recipient",["processcmd"]],["processcmd"]]]],[10,"add_transport","","",50,[[["a"],["self"]],[["recipient",["transportcmd"]],["transportcmd"]]]],[10,"add_protocol","","",50,[[["a"],["self"]],[["recipient",["protocolcmd"]],["protocolcmd"]]]],[10,"set_dht","","",50,[[["a"],["self"]],[["recipient",["dhtcmd"]],["dhtcmd"]]]],[10,"set_session","","",50,[[["a"],["self"]],[["recipient",["sessioncmd"]],["sessioncmd"]]]],[11,"from","","",51,[[["t"]],["t"]]],[11,"into","","",51,[[],["u"]]],[11,"to_owned","","",51,[[["self"]],["t"]]],[11,"clone_into","","",51,[[["self"],["t"]]]],[11,"try_from","","",51,[[["u"]],["result"]]],[11,"try_into","","",51,[[],["result"]]],[11,"borrow","","",51,[[["self"]],["t"]]],[11,"borrow_mut","","",51,[[["self"]],["t"]]],[11,"type_id","","",51,[[["self"]],["typeid"]]],[11,"vzip","","",51,[[],["v"]]],[11,"from","","",49,[[["t"]],["t"]]],[11,"into","","",49,[[],["u"]]],[11,"try_from","","",49,[[["u"]],["result"]]],[11,"try_into","","",49,[[],["result"]]],[11,"borrow","","",49,[[["self"]],["t"]]],[11,"borrow_mut","","",49,[[["self"]],["t"]]],[11,"type_id","","",49,[[["self"]],["typeid"]]],[11,"vzip","","",49,[[],["v"]]],[11,"from","ya_net_p2p::crypto","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"vzip","","",0,[[],["v"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"vzip","","",1,[[],["v"]]],[11,"from","ya_net_p2p::error","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"to_string","","",4,[[["self"]],["string"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"as_fail","","",4,[[["self"]],["fail"]]],[11,"vzip","","",4,[[],["v"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,[[["self"],["t"]]]],[11,"to_string","","",5,[[["self"]],["string"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"as_fail","","",5,[[["self"]],["fail"]]],[11,"vzip","","",5,[[],["v"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,[[["self"],["t"]]]],[11,"to_string","","",6,[[["self"]],["string"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"as_fail","","",6,[[["self"]],["fail"]]],[11,"vzip","","",6,[[],["v"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,[[["self"],["t"]]]],[11,"to_string","","",7,[[["self"]],["string"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"as_fail","","",7,[[["self"]],["fail"]]],[11,"vzip","","",7,[[],["v"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,[[["self"],["t"]]]],[11,"to_string","","",8,[[["self"]],["string"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"as_fail","","",8,[[["self"]],["fail"]]],[11,"vzip","","",8,[[],["v"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,[[["self"],["t"]]]],[11,"to_string","","",9,[[["self"]],["string"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"as_fail","","",9,[[["self"]],["fail"]]],[11,"vzip","","",9,[[],["v"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[],["u"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,[[["self"],["t"]]]],[11,"to_string","","",10,[[["self"]],["string"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"type_id","","",10,[[["self"]],["typeid"]]],[11,"as_fail","","",10,[[["self"]],["fail"]]],[11,"vzip","","",10,[[],["v"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,[[["self"],["t"]]]],[11,"to_string","","",11,[[["self"]],["string"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"type_id","","",11,[[["self"]],["typeid"]]],[11,"as_fail","","",11,[[["self"]],["fail"]]],[11,"vzip","","",11,[[],["v"]]],[11,"from","ya_net_p2p::event","",12,[[["t"]],["t"]]],[11,"into","","",12,[[],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,[[["self"],["t"]]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"type_id","","",12,[[["self"]],["typeid"]]],[11,"vzip","","",12,[[],["v"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[],["u"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,[[["self"],["t"]]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"try_into","","",13,[[],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"type_id","","",13,[[["self"]],["typeid"]]],[11,"vzip","","",13,[[],["v"]]],[11,"from","","",17,[[["t"]],["t"]]],[11,"into","","",17,[[],["u"]]],[11,"to_owned","","",17,[[["self"]],["t"]]],[11,"clone_into","","",17,[[["self"],["t"]]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"try_into","","",17,[[],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"type_id","","",17,[[["self"]],["typeid"]]],[11,"vzip","","",17,[[],["v"]]],[11,"from","","",18,[[["t"]],["t"]]],[11,"into","","",18,[[],["u"]]],[11,"to_owned","","",18,[[["self"]],["t"]]],[11,"clone_into","","",18,[[["self"],["t"]]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"try_into","","",18,[[],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"type_id","","",18,[[["self"]],["typeid"]]],[11,"vzip","","",18,[[],["v"]]],[11,"from","","",19,[[["t"]],["t"]]],[11,"into","","",19,[[],["u"]]],[11,"to_owned","","",19,[[["self"]],["t"]]],[11,"clone_into","","",19,[[["self"],["t"]]]],[11,"try_from","","",19,[[["u"]],["result"]]],[11,"try_into","","",19,[[],["result"]]],[11,"borrow","","",19,[[["self"]],["t"]]],[11,"borrow_mut","","",19,[[["self"]],["t"]]],[11,"type_id","","",19,[[["self"]],["typeid"]]],[11,"vzip","","",19,[[],["v"]]],[11,"from","","",20,[[["t"]],["t"]]],[11,"into","","",20,[[],["u"]]],[11,"to_owned","","",20,[[["self"]],["t"]]],[11,"clone_into","","",20,[[["self"],["t"]]]],[11,"try_from","","",20,[[["u"]],["result"]]],[11,"try_into","","",20,[[],["result"]]],[11,"borrow","","",20,[[["self"]],["t"]]],[11,"borrow_mut","","",20,[[["self"]],["t"]]],[11,"type_id","","",20,[[["self"]],["typeid"]]],[11,"vzip","","",20,[[],["v"]]],[11,"from","","",21,[[["t"]],["t"]]],[11,"into","","",21,[[],["u"]]],[11,"to_owned","","",21,[[["self"]],["t"]]],[11,"clone_into","","",21,[[["self"],["t"]]]],[11,"try_from","","",21,[[["u"]],["result"]]],[11,"try_into","","",21,[[],["result"]]],[11,"borrow","","",21,[[["self"]],["t"]]],[11,"borrow_mut","","",21,[[["self"]],["t"]]],[11,"type_id","","",21,[[["self"]],["typeid"]]],[11,"vzip","","",21,[[],["v"]]],[11,"from","","",22,[[["t"]],["t"]]],[11,"into","","",22,[[],["u"]]],[11,"to_owned","","",22,[[["self"]],["t"]]],[11,"clone_into","","",22,[[["self"],["t"]]]],[11,"try_from","","",22,[[["u"]],["result"]]],[11,"try_into","","",22,[[],["result"]]],[11,"borrow","","",22,[[["self"]],["t"]]],[11,"borrow_mut","","",22,[[["self"]],["t"]]],[11,"type_id","","",22,[[["self"]],["typeid"]]],[11,"vzip","","",22,[[],["v"]]],[11,"from","","",25,[[["t"]],["t"]]],[11,"into","","",25,[[],["u"]]],[11,"to_owned","","",25,[[["self"]],["t"]]],[11,"clone_into","","",25,[[["self"],["t"]]]],[11,"try_from","","",25,[[["u"]],["result"]]],[11,"try_into","","",25,[[],["result"]]],[11,"borrow","","",25,[[["self"]],["t"]]],[11,"borrow_mut","","",25,[[["self"]],["t"]]],[11,"type_id","","",25,[[["self"]],["typeid"]]],[11,"vzip","","",25,[[],["v"]]],[11,"from","","",26,[[["t"]],["t"]]],[11,"into","","",26,[[],["u"]]],[11,"to_owned","","",26,[[["self"]],["t"]]],[11,"clone_into","","",26,[[["self"],["t"]]]],[11,"try_from","","",26,[[["u"]],["result"]]],[11,"try_into","","",26,[[],["result"]]],[11,"borrow","","",26,[[["self"]],["t"]]],[11,"borrow_mut","","",26,[[["self"]],["t"]]],[11,"type_id","","",26,[[["self"]],["typeid"]]],[11,"vzip","","",26,[[],["v"]]],[11,"from","","",27,[[["t"]],["t"]]],[11,"into","","",27,[[],["u"]]],[11,"to_owned","","",27,[[["self"]],["t"]]],[11,"clone_into","","",27,[[["self"],["t"]]]],[11,"try_from","","",27,[[["u"]],["result"]]],[11,"try_into","","",27,[[],["result"]]],[11,"borrow","","",27,[[["self"]],["t"]]],[11,"borrow_mut","","",27,[[["self"]],["t"]]],[11,"type_id","","",27,[[["self"]],["typeid"]]],[11,"vzip","","",27,[[],["v"]]],[11,"from","ya_net_p2p::packet","",28,[[["t"]],["t"]]],[11,"into","","",28,[[],["u"]]],[11,"to_owned","","",28,[[["self"]],["t"]]],[11,"clone_into","","",28,[[["self"],["t"]]]],[11,"try_from","","",28,[[["u"]],["result"]]],[11,"try_into","","",28,[[],["result"]]],[11,"borrow","","",28,[[["self"]],["t"]]],[11,"borrow_mut","","",28,[[["self"]],["t"]]],[11,"type_id","","",28,[[["self"]],["typeid"]]],[11,"vzip","","",28,[[],["v"]]],[11,"from","","",29,[[["t"]],["t"]]],[11,"into","","",29,[[],["u"]]],[11,"to_owned","","",29,[[["self"]],["t"]]],[11,"clone_into","","",29,[[["self"],["t"]]]],[11,"try_from","","",29,[[["u"]],["result"]]],[11,"try_into","","",29,[[],["result"]]],[11,"borrow","","",29,[[["self"]],["t"]]],[11,"borrow_mut","","",29,[[["self"]],["t"]]],[11,"type_id","","",29,[[["self"]],["typeid"]]],[11,"vzip","","",29,[[],["v"]]],[11,"from","","",30,[[["t"]],["t"]]],[11,"into","","",30,[[],["u"]]],[11,"to_owned","","",30,[[["self"]],["t"]]],[11,"clone_into","","",30,[[["self"],["t"]]]],[11,"try_from","","",30,[[["u"]],["result"]]],[11,"try_into","","",30,[[],["result"]]],[11,"borrow","","",30,[[["self"]],["t"]]],[11,"borrow_mut","","",30,[[["self"]],["t"]]],[11,"type_id","","",30,[[["self"]],["typeid"]]],[11,"vzip","","",30,[[],["v"]]],[11,"from","","",31,[[["t"]],["t"]]],[11,"into","","",31,[[],["u"]]],[11,"to_owned","","",31,[[["self"]],["t"]]],[11,"clone_into","","",31,[[["self"],["t"]]]],[11,"try_from","","",31,[[["u"]],["result"]]],[11,"try_into","","",31,[[],["result"]]],[11,"borrow","","",31,[[["self"]],["t"]]],[11,"borrow_mut","","",31,[[["self"]],["t"]]],[11,"type_id","","",31,[[["self"]],["typeid"]]],[11,"vzip","","",31,[[],["v"]]],[11,"from","","",32,[[["t"]],["t"]]],[11,"into","","",32,[[],["u"]]],[11,"to_owned","","",32,[[["self"]],["t"]]],[11,"clone_into","","",32,[[["self"],["t"]]]],[11,"try_from","","",32,[[["u"]],["result"]]],[11,"try_into","","",32,[[],["result"]]],[11,"borrow","","",32,[[["self"]],["t"]]],[11,"borrow_mut","","",32,[[["self"]],["t"]]],[11,"type_id","","",32,[[["self"]],["typeid"]]],[11,"vzip","","",32,[[],["v"]]],[11,"from","","",33,[[["t"]],["t"]]],[11,"into","","",33,[[],["u"]]],[11,"to_owned","","",33,[[["self"]],["t"]]],[11,"clone_into","","",33,[[["self"],["t"]]]],[11,"try_from","","",33,[[["u"]],["result"]]],[11,"try_into","","",33,[[],["result"]]],[11,"borrow","","",33,[[["self"]],["t"]]],[11,"borrow_mut","","",33,[[["self"]],["t"]]],[11,"type_id","","",33,[[["self"]],["typeid"]]],[11,"vzip","","",33,[[],["v"]]],[11,"equivalent","","",33,[[["k"],["self"]],["bool"]]],[11,"from","","",34,[[["t"]],["t"]]],[11,"into","","",34,[[],["u"]]],[11,"to_owned","","",34,[[["self"]],["t"]]],[11,"clone_into","","",34,[[["self"],["t"]]]],[11,"try_from","","",34,[[["u"]],["result"]]],[11,"try_into","","",34,[[],["result"]]],[11,"borrow","","",34,[[["self"]],["t"]]],[11,"borrow_mut","","",34,[[["self"]],["t"]]],[11,"type_id","","",34,[[["self"]],["typeid"]]],[11,"vzip","","",34,[[],["v"]]],[11,"equivalent","","",34,[[["k"],["self"]],["bool"]]],[11,"from","ya_net_p2p::packet::processor::crypto","",37,[[["t"]],["t"]]],[11,"into","","",37,[[],["u"]]],[11,"try_from","","",37,[[["u"]],["result"]]],[11,"try_into","","",37,[[],["result"]]],[11,"borrow","","",37,[[["self"]],["t"]]],[11,"borrow_mut","","",37,[[["self"]],["t"]]],[11,"type_id","","",37,[[["self"]],["typeid"]]],[11,"vzip","","",37,[[],["v"]]],[11,"from","ya_net_p2p::protocol::kad","",39,[[["t"]],["t"]]],[11,"into","","",39,[[],["u"]]],[11,"try_from","","",39,[[["u"]],["result"]]],[11,"try_into","","",39,[[],["result"]]],[11,"borrow","","",39,[[["self"]],["t"]]],[11,"borrow_mut","","",39,[[["self"]],["t"]]],[11,"type_id","","",39,[[["self"]],["typeid"]]],[11,"vzip","","",39,[[],["v"]]],[11,"from","ya_net_p2p::protocol::session","",52,[[["t"]],["t"]]],[11,"into","","",52,[[],["u"]]],[11,"try_from","","",52,[[["u"]],["result"]]],[11,"try_into","","",52,[[],["result"]]],[11,"borrow","","",52,[[["self"]],["t"]]],[11,"borrow_mut","","",52,[[["self"]],["t"]]],[11,"type_id","","",52,[[["self"]],["typeid"]]],[11,"vzip","","",52,[[],["v"]]],[11,"from","","",40,[[["t"]],["t"]]],[11,"into","","",40,[[],["u"]]],[11,"try_from","","",40,[[["u"]],["result"]]],[11,"try_into","","",40,[[],["result"]]],[11,"borrow","","",40,[[["self"]],["t"]]],[11,"borrow_mut","","",40,[[["self"]],["t"]]],[11,"type_id","","",40,[[["self"]],["typeid"]]],[11,"vzip","","",40,[[],["v"]]],[11,"from","ya_net_p2p::transport","",42,[[["t"]],["t"]]],[11,"into","","",42,[[],["u"]]],[11,"to_owned","","",42,[[["self"]],["t"]]],[11,"clone_into","","",42,[[["self"],["t"]]]],[11,"try_from","","",42,[[["u"]],["result"]]],[11,"try_into","","",42,[[],["result"]]],[11,"borrow","","",42,[[["self"]],["t"]]],[11,"borrow_mut","","",42,[[["self"]],["t"]]],[11,"type_id","","",42,[[["self"]],["typeid"]]],[11,"vzip","","",42,[[],["v"]]],[11,"equivalent","","",42,[[["k"],["self"]],["bool"]]],[11,"from","ya_net_p2p::transport::connection","",43,[[["t"]],["t"]]],[11,"into","","",43,[[],["u"]]],[11,"to_owned","","",43,[[["self"]],["t"]]],[11,"clone_into","","",43,[[["self"],["t"]]]],[11,"to_string","","",43,[[["self"]],["string"]]],[11,"try_from","","",43,[[["u"]],["result"]]],[11,"try_into","","",43,[[],["result"]]],[11,"borrow","","",43,[[["self"]],["t"]]],[11,"borrow_mut","","",43,[[["self"]],["t"]]],[11,"type_id","","",43,[[["self"]],["typeid"]]],[11,"vzip","","",43,[[],["v"]]],[11,"from","","",45,[[["t"]],["t"]]],[11,"into","","",45,[[],["u"]]],[11,"to_owned","","",45,[[["self"]],["t"]]],[11,"clone_into","","",45,[[["self"],["t"]]]],[11,"try_from","","",45,[[["u"]],["result"]]],[11,"try_into","","",45,[[],["result"]]],[11,"borrow","","",45,[[["self"]],["t"]]],[11,"borrow_mut","","",45,[[["self"]],["t"]]],[11,"type_id","","",45,[[["self"]],["typeid"]]],[11,"vzip","","",45,[[],["v"]]],[11,"from","","",44,[[["t"]],["t"]]],[11,"into","","",44,[[],["u"]]],[11,"try_from","","",44,[[["u"]],["result"]]],[11,"try_into","","",44,[[],["result"]]],[11,"borrow","","",44,[[["self"]],["t"]]],[11,"borrow_mut","","",44,[[["self"]],["t"]]],[11,"type_id","","",44,[[["self"]],["typeid"]]],[11,"vzip","","",44,[[],["v"]]],[11,"from","ya_net_p2p::transport::laminar","",46,[[["t"]],["t"]]],[11,"into","","",46,[[],["u"]]],[11,"try_from","","",46,[[["u"]],["result"]]],[11,"try_into","","",46,[[],["result"]]],[11,"borrow","","",46,[[["self"]],["t"]]],[11,"borrow_mut","","",46,[[["self"]],["t"]]],[11,"type_id","","",46,[[["self"]],["typeid"]]],[11,"vzip","","",46,[[],["v"]]],[11,"from","","",47,[[["t"]],["t"]]],[11,"into","","",47,[[],["u"]]],[11,"try_from","","",47,[[["u"]],["result"]]],[11,"try_into","","",47,[[],["result"]]],[11,"borrow","","",47,[[["self"]],["t"]]],[11,"borrow_mut","","",47,[[["self"]],["t"]]],[11,"type_id","","",47,[[["self"]],["typeid"]]],[11,"vzip","","",47,[[],["v"]]],[11,"from","ya_net_p2p::error","",11,[[["messageerror"]],["self"]]],[11,"from","","",11,[[["networkerror"]],["self"]]],[11,"from","","",11,[[["protocolerror"]],["self"]]],[11,"from","","",11,[[["sessionerror"]],["self"]]],[11,"from","","",11,[[["discoveryerror"]],["self"]]],[11,"from","","",11,[[["arc",["error"]],["error"]],["self"]]],[11,"from","","",11,[[["channelerror"]],["self"]]],[11,"from","","",11,[[["cryptoerror"]],["self"]]],[11,"from","","",11,[[["error"]],["self"]]],[11,"from","","",11,[[["mailboxerror"]],["self"]]],[11,"from","","",11,[[["senderror"]],["self"]]],[11,"from","","",9,[[["senderror"]],["self"]]],[11,"from","","",11,[[["senderror"]],["self"]]],[11,"from","","",9,[[["senderror"]],["self"]]],[11,"from","","",9,[[["mailboxerror"]],["self"]]],[11,"from","ya_net_p2p::packet","",30,[[["packet"]],["self"]]],[11,"from","ya_net_p2p::error","",11,[[["error"]],["self"]]],[11,"from","","",11,[[["error"]],["self"]]],[11,"from","ya_net_p2p","",53,[[["pendingconnection"]],["self"]]],[11,"from","ya_net_p2p::packet","",31,[[["packet"]],["self"]]],[11,"from","","",34,[[["orderingguarantee"]],["self"]]],[11,"from","","",33,[[["deliveryguarantee"]],["self"]]],[11,"clone","ya_net_p2p::crypto","",0,[[["self"]],["signature"]]],[11,"clone","","",1,[[["self"]],["signatureecdsa"]]],[11,"clone","ya_net_p2p::error","",4,[[["self"]],["networkerror"]]],[11,"clone","","",5,[[["self"]],["sessionerror"]]],[11,"clone","","",6,[[["self"]],["discoveryerror"]]],[11,"clone","","",7,[[["self"]],["protocolerror"]]],[11,"clone","","",8,[[["self"]],["messageerror"]]],[11,"clone","","",9,[[["self"]],["channelerror"]]],[11,"clone","","",10,[[["self"]],["cryptoerror"]]],[11,"clone","","",11,[[["self"]],["error"]]],[11,"clone","ya_net_p2p::event","",12,[[["self"]],["servicecmd"]]],[11,"clone","","",13,[[["self"]],["sendcmd"]]],[11,"clone","","",17,[[["self"]],["transportcmd"]]],[11,"clone","","",18,[[["self"]],["protocolcmd"]]],[11,"clone","","",19,[[["self"]],["sessioncmd"]]],[11,"clone","","",20,[[["self"]],["dhtcmd"]]],[11,"clone","","",21,[[["self"]],["dhtresponse"]]],[11,"clone","","",22,[[["self"]],["processcmd"]]],[11,"clone","","",25,[[["self"]],["transportevt"]]],[11,"clone","","",26,[[["self"]],["sessionevt"]]],[11,"clone","","",27,[[["self"]],["disconnectreason"]]],[11,"clone","ya_net_p2p::packet","",28,[[["self"]],["payload"]]],[11,"clone","","",29,[[["self"]],["packet"]]],[11,"clone","","",30,[[["self"]],["wirepacket"]]],[11,"clone","","",31,[[["self"]],["addressedpacket"]]],[11,"clone","","",32,[[["self"]],["guarantees"]]],[11,"clone","","",33,[[["self"]],["deliverytype"]]],[11,"clone","","",34,[[["self"]],["orderingtype"]]],[11,"clone","ya_net_p2p::transport::connection","",43,[[["self"]],["connection"]]],[11,"clone","","",45,[[["self"]],["connectionmanager"]]],[11,"clone","ya_net_p2p::transport","",42,[[["self"]],["address"]]],[11,"clone","ya_net_p2p","",51,[[["self"]],["netconfig"]]],[11,"default","ya_net_p2p::packet","",33,[[],["self"]]],[11,"default","","",34,[[],["self"]]],[11,"default","ya_net_p2p::protocol::session","",52,[[],["self"]]],[11,"default","ya_net_p2p::transport::connection","",45,[[],["self"]]],[11,"default","ya_net_p2p::transport::laminar","",46,[[],["self"]]],[11,"default","ya_net_p2p","",51,[[],["self"]]],[11,"cmp","ya_net_p2p::packet","",33,[[["self"],["deliverytype"]],["ordering"]]],[11,"cmp","","",34,[[["orderingtype"],["self"]],["ordering"]]],[11,"eq","ya_net_p2p::event","",27,[[["disconnectreason"],["self"]],["bool"]]],[11,"ne","","",27,[[["disconnectreason"],["self"]],["bool"]]],[11,"eq","ya_net_p2p::packet","",33,[[["self"],["deliverytype"]],["bool"]]],[11,"eq","","",34,[[["orderingtype"],["self"]],["bool"]]],[11,"ne","","",34,[[["orderingtype"],["self"]],["bool"]]],[11,"eq","ya_net_p2p::transport::connection","",43,[[["self"]],["bool"]]],[11,"eq","ya_net_p2p::transport","",42,[[["self"],["address"]],["bool"]]],[11,"ne","","",42,[[["self"],["address"]],["bool"]]],[11,"partial_cmp","ya_net_p2p::packet","",33,[[["self"],["deliverytype"]],[["option",["ordering"]],["ordering"]]]],[11,"partial_cmp","","",34,[[["orderingtype"],["self"]],[["option",["ordering"]],["ordering"]]]],[11,"lt","","",34,[[["orderingtype"],["self"]],["bool"]]],[11,"le","","",34,[[["orderingtype"],["self"]],["bool"]]],[11,"gt","","",34,[[["orderingtype"],["self"]],["bool"]]],[11,"ge","","",34,[[["orderingtype"],["self"]],["bool"]]],[11,"fmt","ya_net_p2p::crypto","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",1,[[["formatter"],["self"]],["result"]]],[11,"fmt","ya_net_p2p::error","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",5,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",6,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",7,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",8,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",9,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",10,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",11,[[["formatter"],["self"]],["result"]]],[11,"fmt","ya_net_p2p::event","",12,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",13,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",17,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",18,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",19,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",20,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",21,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",22,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",25,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",26,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",27,[[["formatter"],["self"]],["result"]]],[11,"fmt","ya_net_p2p::packet","",28,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",29,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",30,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",31,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",32,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",33,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",34,[[["formatter"],["self"]],["result"]]],[11,"fmt","ya_net_p2p::transport::connection","",43,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",45,[[["formatter"],["self"]],["result"]]],[11,"fmt","ya_net_p2p::transport","",42,[[["formatter"],["self"]],["result"]]],[11,"fmt","ya_net_p2p","",51,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",49,[[["formatter"],["self"]],["result"]]],[11,"fmt","ya_net_p2p::error","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",5,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",6,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",7,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",8,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",9,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",10,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",11,[[["formatter"],["self"]],["result"]]],[11,"fmt","ya_net_p2p::transport::connection","",43,[[["formatter"],["self"]],["result"]]],[11,"hash","","",43,[[["self"],["h"]]]],[11,"hash","ya_net_p2p::transport","",42,[[["self"],["__h"]]]],[11,"try_from","ya_net_p2p::packet","",29,[[["kadevtsend"]],["result"]]],[11,"source","ya_net_p2p::error","",11,[[["self"]],[["option",["error"]],["error"]]]],[11,"serialize","ya_net_p2p::crypto","",0,[[["self"],["__s"]],["result"]]],[11,"serialize","","",1,[[["self"],["__s"]],["result"]]],[11,"serialize","ya_net_p2p::event","",27,[[["self"],["__s"]],["result"]]],[11,"serialize","ya_net_p2p::transport","",42,[[["self"],["__s"]],["result"]]],[11,"deserialize","ya_net_p2p::crypto","",0,[[["__d"]],["result"]]],[11,"deserialize","","",1,[[["__d"]],["result"]]],[11,"deserialize","ya_net_p2p::event","",27,[[["__d"]],["result"]]],[11,"deserialize","ya_net_p2p::transport","",42,[[["__d"]],["result"]]],[11,"started","ya_net_p2p::protocol::kad","",39,[[["self"]]]],[11,"stopped","","",39,[[["self"]]]],[11,"started","ya_net_p2p::protocol::session","",40,[[["self"]]]],[11,"stopped","","",40,[[["self"]]]],[11,"started","ya_net_p2p::transport::laminar","",47,[[["self"]]]],[11,"stopped","","",47,[[["self"]]]],[11,"started","ya_net_p2p","",49,[[["self"]]]],[11,"stopped","","",49,[[["self"]]]],[11,"handle","ya_net_p2p::packet::processor::crypto","",37,[[["self"],["context"],["processcmd"]]]],[11,"handle","ya_net_p2p::protocol::kad","",39,[[["context"],["dhtcmd",["key"]],["key"],["self"]]]],[11,"handle","","",39,[[["context"],["key"],["self"],["protocolcmd",["key"]]]]],[11,"handle","ya_net_p2p::protocol::session","",40,[[["sessioncmd"],["self"],["context"]]]],[11,"handle","","",40,[[["self"],["protocolcmd"],["context"]]]],[11,"handle","ya_net_p2p::transport::laminar","",47,[[["self"],["transportcmd"],["context"]]]],[11,"handle","ya_net_p2p","",49,[[["self"],["servicecmd"],["context"]]]],[11,"handle","","",49,[[["self"],["sendcmd"],["context"]]]],[11,"handle","","",49,[[["transportevt"],["self"],["context"]]]],[11,"handle","","",49,[[["sessionevt"],["self"],["context"]]]],[11,"handle","ya_net_p2p::protocol::kad","",39,[[["kadevtsend"],["self"],["context"]]]],[11,"handle","ya_net_p2p::event","",21,[[["option"],["responsechannel"]]]]],"p":[[4,"Signature"],[4,"SignatureECDSA"],[13,"P256K1"],[8,"Crypto"],[4,"NetworkError"],[4,"SessionError"],[4,"DiscoveryError"],[4,"ProtocolError"],[4,"MessageError"],[4,"ChannelError"],[4,"CryptoError"],[4,"Error"],[4,"ServiceCmd"],[4,"SendCmd"],[13,"Roaming"],[13,"Session"],[13,"Broadcast"],[4,"TransportCmd"],[4,"ProtocolCmd"],[4,"SessionCmd"],[4,"DhtCmd"],[4,"DhtResponse"],[4,"ProcessCmd"],[13,"Outbound"],[13,"Inbound"],[4,"TransportEvt"],[4,"SessionEvt"],[4,"DisconnectReason"],[3,"Payload"],[3,"Packet"],[3,"WirePacket"],[3,"AddressedPacket"],[3,"Guarantees"],[4,"DeliveryType"],[4,"OrderingType"],[13,"Ordered"],[13,"Sequenced"],[3,"CryptoProcessor"],[8,"NodeDataExt"],[3,"KadProtocol"],[3,"SessionProtocol"],[8,"Protocol"],[3,"Address"],[3,"Connection"],[4,"PendingConnection"],[3,"ConnectionManager"],[3,"TransportConfig"],[3,"LaminarTransport"],[8,"Transport"],[3,"Net"],[8,"NetAddrExt"],[3,"NetConfig"],[3,"ProtocolConfig"],[6,"ConnectionFut"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);