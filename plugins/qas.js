var _0xc7f6=["\x2E\x2E\x2F\x63\x6F\x6E\x66\x69\x67","\x73\x65\x71\x75\x65\x6C\x69\x7A\x65","\x77\x61\x72\x6E\x69\x6E\x67","\x53\x54\x52\x49\x4E\x47","\x54\x45\x58\x54","\x64\x65\x66\x69\x6E\x65","\x44\x41\x54\x41\x42\x41\x53\x45","\x66\x69\x6E\x64\x41\x6C\x6C","\x6C\x65\x6E\x67\x74\x68","\x64\x61\x74\x61\x56\x61\x6C\x75\x65\x73","\x63\x72\x65\x61\x74\x65","\x72\x65\x73\x65\x74","\x75\x70\x64\x61\x74\x65","\x65\x78\x70\x6F\x72\x74\x73"];const config=require(_0xc7f6[0]);const {DataTypes}=require(_0xc7f6[1]);const WarnDB=config[_0xc7f6[6]][_0xc7f6[5]](_0xc7f6[2],{chat:{type:DataTypes[_0xc7f6[3]],allowNull:false},sewuser:{type:DataTypes[_0xc7f6[3]],allowNull:false},sewres:{type:DataTypes[_0xc7f6[4]],allowNull:false},sewcount:{type:DataTypes[_0xc7f6[3]],allowNull:false}});async function getWarn(_0x5f65x4= null,_0x5f65x5= null){var _0x5f65x6= await WarnDB[_0xc7f6[7]]({where:{chat:_0x5f65x4,sewuser:_0x5f65x5}});if(_0x5f65x6[_0xc7f6[8]]< 1){return false}else {return _0x5f65x6[0][_0xc7f6[9]]}}async function setWarn(_0x5f65x4= null,_0x5f65x5= null,_0x5f65x8= null){const _0x5f65x9=0;var _0x5f65x6= await WarnDB[_0xc7f6[7]]({where:{chat:_0x5f65x4,sewuser:_0x5f65x5}});if(_0x5f65x6[_0xc7f6[8]]< 1){return  await WarnDB[_0xc7f6[10]]({chat:_0x5f65x4,sewuser:_0x5f65x5,sewres:_0x5f65x8,sewcount:_0x5f65x9})}else {if(_0x5f65x8== _0xc7f6[11]){return  await _0x5f65x6[0][_0xc7f6[12]]({chat:_0x5f65x4,sewuser:_0x5f65x5,sewres:_0x5f65x8,sewcount:_0x5f65x9})}else {return  await _0x5f65x6[0][_0xc7f6[12]]({chat:_0x5f65x4,sewuser:_0x5f65x5,sewres:_0x5f65x8,sewcount:sewcount+ 1})}}}module[_0xc7f6[13]]= {WarnDB:WarnDB,getWarn:getWarn,setWarn:setWarn}
