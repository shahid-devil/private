const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');
const fs = require('fs');
const Ravi = 'image to url'
const Raavi = 'image to url'
const Rabvi = 'image to url'
const Racvi = 'image to url'
const Radvi = 'image to url'
const SEW = 'please reply to image'
const Pach = require('sewqueen-rs-pvt');
const sewimgurl = require('sew-img-data');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
const IMGBB = 'fa008f98489dde58ae5222c15637602e'
if (os.userInfo().homedir !== rgmsk.pay) return;
let RS = Config.WORKTYPE == 'public' ? false : true
QueenSew.newcmdaddtosew({pattern: 'insta ?(.*)', fromMe: RS, desc: Ravi}, (async (message, match) => {    
const sewig = match[1]
        if (!sewig) return await message.client.sendMessage(message.jid,'need insta link',MessageType.text);
    const sewikg = await Pach.SewIG(sewig)
    var downloading = await message.client.sendMessage(message.jid,'downloading your insta video',MessageType.text);
    const instasew = await axios.get(sewikg.result.link, {responseType: 'arraybuffer'})
    var uploading = await message.client.sendMessage(message.jid,'Uploading your insta video',MessageType.text);
    await message.client.sendMessage(message.jid,Buffer.from(instasew.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, quoted: message.data})
   
    await message.client.sendMessage(message.jid,'*Video description*\n\n' + sewikg.result.disc + '\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ', MessageType.text ,{quoted: message.data});    
}));
QueenSew.newcmdaddtosew({pattern: 'url', fromMe: RS, desc: Ravi}, (async (message, match) => {    
    if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid,SEW);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    const sewurl = await sewimgurl(IMGBB, location)
    await message.client.sendMessage(message.jid,'*THIS IS YOUR DIRECT URL*\n\n' + sewurl.display_url + '\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ', MessageType.text ,{quoted: message.data});    
}));

QueenSew.newcmdaddtosew({pattern: 'mvid ?(.*)', fromMe: RS, desc: Raavi}, (async (message, match) => {    
const sewigk = match[1]
        if (!sewigk) return await message.client.sendMessage(message.jid,'need mediafire link',MessageType.text);
    const { nama, mime, size, link } = await Pach.mediafireDl(sewigk)
    var downloading = await message.client.sendMessage(message.jid,'downloading your mediafire doc',MessageType.text);
    const instasew = await axios.get(link, {responseType: 'arraybuffer'})
    var uploading = await message.client.sendMessage(message.jid,'Uploading your mediafire doc',MessageType.text);
    await message.client.sendMessage(message.jid,Buffer.from(instasew.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, quoted: message.data})
   
    await message.client.sendMessage(message.jid,'*file details*\n\n' + 'Name: ' + nama + '\nsize: ' + size + '\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ', MessageType.text ,{quoted: message.data});    
}));
QueenSew.newcmdaddtosew({pattern: 'mapk ?(.*)', fromMe: RS, desc: Rabvi}, (async (message, match) => {    
const sewigk = match[1]
        if (!sewigk) return await message.client.sendMessage(message.jid,'need mediafire link',MessageType.text);
    const ravi = await Pach.mediafireDl(match[1])
    var downloading = await message.client.sendMessage(message.jid,'downloading your mediafire doc',MessageType.text);
    var uploading = await message.client.sendMessage(message.jid,'Uploading your mediafire doc',MessageType.text);
    await message.client.sendMessage(message.jid,ravi[0].link, MessageType.document, {filename: nama + '.apk',mimetype: Mimetype.apk, ptt: false, quoted: message.data})
   
    await message.client.sendMessage(message.jid,'*file details*\n\n' + 'Name: ' + nama + '\nsize: ' + size + '\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ', MessageType.text ,{quoted: message.data});    
}));
QueenSew.newcmdaddtosew({pattern: 'mzip ?(.*)', fromMe: RS, desc: Racvi}, (async (message, match) => {    
const sewigk = match[1]
        if (!sewigk) return await message.client.sendMessage(message.jid,'need mediafire link',MessageType.text);
    const { nama, mime, size, link } = await Pach.mediafireDl(sewigk)
    var downloading = await message.client.sendMessage(message.jid,'downloading your mediafire doc',MessageType.text);
    const instasew = await axios.get(link, {responseType: 'arraybuffer'})
    var uploading = await message.client.sendMessage(message.jid,'Uploading your mediafire doc',MessageType.text);
    await message.client.sendMessage(message.jid,Buffer.from(instasew.data), MessageType.document, {filename: nama + '.zip',mimetype: Mimetype.zip, ptt: false, quoted: message.data})
   
    await message.client.sendMessage(message.jid,'*file details*\n\n' + 'Name: ' + nama + '\nsize: ' + size + '\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ', MessageType.text ,{quoted: message.data});    
}));
QueenSew.newcmdaddtosew({pattern: 'mimg ?(.*)', fromMe: RS, desc: Radvi}, (async (message, match) => {    
const sewigk = match[1]
        if (!sewigk) return await message.client.sendMessage(message.jid,'need mediafire link',MessageType.text);
    const { nama, mime, size, link } = await Pach.mediafireDl(sewigk)
    var downloading = await message.client.sendMessage(message.jid,'downloading your mediafire doc',MessageType.text);
    const instasew = await axios.get(link, {responseType: 'arraybuffer'})
    var uploading = await message.client.sendMessage(message.jid,'Uploading your mediafire doc',MessageType.text);
    await message.client.sendMessage(message.jid,Buffer.from(instasew.data), MessageType.document, {filename: nama + '.png',mimetype: Mimetype.png, ptt: false, quoted: message.data})
   
    await message.client.sendMessage(message.jid,'*file details*\n\n' + 'Name: ' + nama + '\nsize: ' + size + '\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ', MessageType.text ,{quoted: message.data});    
}));
