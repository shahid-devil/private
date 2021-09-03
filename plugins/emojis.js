/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Pach = require('sewqueen-rs-pvt')
const request = require('request');
const got = require("got");
const Config = require('../config');
const des = "You Can convart any emoji to sticker/ ඔබ යොදන ඉමෝජි sticker බවට පත් කරයි"
const iii = "Only work with emoji\n ඉමොජි පමණක් එවන්න"
 if (Config.PSW !== 'kingraviya') {
if (Config.WORKTYPE == 'private') {

    QueenSew.newcmdaddtosew({ pattern: 'emoji ?(.*)', fromMe: true, desc: des}, (async (message, match) => {
  
    if (match[1] === '') return await message.sendMessage(iii);
    var img = await Pach.emoji(match[1])
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(img.image, '/root/QueenSewWhatsappBot/emoji.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/emoji.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sew.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sew.webp'), MessageType.sticker);
        })
      })
    })
  
}));
}
else if (Config.WORKTYPE == 'public') {

    QueenSew.newcmdaddtosew({ pattern: 'emoji ?(.*)', fromMe: false, dontAdCommandList: true }, (async (message, match) => {
  
    if (match[1] === '') return await message.sendMessage(iii);
    var img = await Pach.emoji(match[1])
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(img.image, '/root/QueenSewWhatsappBot/emoji.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/emoji.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sew.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sew.webp'), MessageType.sticker);
        })
      })
    })
  
}));
QueenSew.newcmdaddtosew({ pattern: 'emoji ?(.*)', fromMe: true, desc: des }, (async (message, match) => {
  
    if (match[1] === '') return await message.sendMessage(iii);
    var img = await Pach.emoji(match[1])
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(img.image, '/root/QueenSewWhatsappBot/emoji.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/emoji.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sew.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sew.webp'), MessageType.sticker);
        })
      })
    })
  
}));
}
}


