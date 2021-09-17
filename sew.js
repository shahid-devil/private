/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
        const fs = require("fs");
        const path = require("path");
        const events = require("./events");
        const chalk = require('chalk');
        const Raviya = require('./config');
        const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
        const {Message, StringSession, Image, Video} = require('./sewqueen/');
        const { DataTypes } = require('sequelize');
        const { getMessage } = require("./plugins/sql/greetings");
        const axios = require('axios');
        const got = require('got');
        const Pach = require('sewqueen-rs-pvt');
        const SewQueenDB = Raviya.DATABASE.define('SewQueen', {
        info: { type: DataTypes.STRING, allowNull: false },
        value: { type: DataTypes.TEXT, allowNull: false }});
        fs.readdirSync('./plugins/sql/').forEach(plugin => {
        if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin)}
});
       const plugindb = require('./plugins/sql/plugin');
       var OWN = { ff: '94785435462,94785457519' }
       String.prototype.format = function () {
       var i = 0, args = arguments;
       return this.replace(/{}/g, function () {
       return typeof args[i] != 'undefined' ? args[i++] : '';
})};
       if (!Date.now) {
       Date.now = function() { return new Date().getTime(); }
}
       Array.prototype.remove = function() {
       var what, a = arguments, L = a.length, ax;
       while (L && this.length) {
       what = a[--L];
       while ((ax = this.indexOf(what)) !== -1) {
       this.splice(ax, 1);
}}
       return this;
};
       async function sewQueen () {
       await Raviya.DATABASE.sync();
       var StrSes_Db = await SewQueenDB.findAll({
       where: {
       info: 'StringSession'
}});
       const CDSew = new WAConnection();
       CDSew.version = [2, 2123, 8];
       const Session = new StringSession();
    
        setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var ann_msg = await Pach.news_daily(Raviya.LANG)
        var ann = await Pach.rnn()
        while (getGMTh == 18 && getGMTm == 00) {
        var ilan = ''
        if (Raviya.LANG == 'EN') ilan = '| *✨Daily Announcements For Sew Queen✨* |\n\n'
        if (Raviya.LANG == 'SI') ilan = '| *✨Sew Queen වට්සැප් බොට් සදහා දෛනික නිවේදන✨* |\n\n'
        if (ann.video.includes('http') || ann.video.includes('https')) {
        var VID = ann.video.split('youtu.be')[1].split(' ')[0].replace('/', '')
        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
        yt.on('end', async () => {
        return await CDSew.sendMessage(CDSew.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: ilan + ann_msg.replace('{user}', CDSew.user.name).replace('{wa_version}', CDSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', CDSew.user.phone.os_version).replace('{device_model}', CDSew.user.phone.device_model).replace('{device_brand}', CDSew.user.phone.device_manufacturer), mimetype: Mimetype.mp4});
        });
        } else {
        if (ann.image.includes('http') || ann.image.includes('https')) {
        var imagegen = await axios.get(ann.image, { responseType: 'arraybuffer'})
        return await CDSew.sendMessage(CDSew.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: ilan + ann_msg.replace('{user}', CDSew.user.name).replace('{wa_version}', CDSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', CDSew.user.phone.os_version).replace('{device_model}', CDSew.user.phone.device_model).replace('{device_brand}', CDSew.user.phone.device_manufacturer)})
        } else {
        return await CDSew.sendMessage(CDSew.user.jid, ilan + ann_msg.replace('{user}', CDSew.user.name).replace('{wa_version}', CDSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', CDSew.user.phone.os_version).replace('{device_model}', CDSew.user.phone.device_model).replace('{device_brand}', CDSew.user.phone.device_manufacturer), MessageType.text)
}}}
        }, 50000);
        setInterval(async () => { 
        var getGMTq = new Date().getHours()
        var getGMTs = new Date().getMinutes()
        var anomsg = await Pach.news_daily(Raviya.LANG)
        var aaq = await Pach.rnn()
        while (getGMTq == 08 && getGMTs == 00) {
        var srmg = ''
        if (Raviya.LANG == 'EN') srmg = '| *✨Daily Announcements For Sew Queen✨* |\n\n'
        if (Raviya.LANG == 'SI') srmg = '| *✨Sew Queen වට්සැප් බොට් සදහා දෛනික නිවේදන✨* |\n\n'
        if (aaq.video.includes('http') || aaq.video.includes('https')) {
        var VID = aaq.video.split('youtu.be')[1].split(' ')[0].replace('/', '')
        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
        yt.on('end', async () => {
        return await CDSew.sendMessage(CDSew.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: srmg + anomsg.replace('{user}', CDSew.user.name).replace('{wa_version}', CDSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', CDSew.user.phone.os_version).replace('{device_model}', CDSew.user.phone.device_model).replace('{device_brand}', CDSew.user.phone.device_manufacturer), mimetype: Mimetype.mp4});
});
        } else {
        if (aaq.image.includes('http') || aaq.image.includes('https')) {
        var imagegen = await axios.get(aaq.image, { responseType: 'arraybuffer'})
        return await CDSew.sendMessage(CDSew.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: srmg + anomsg.replace('{user}', CDSew.user.name).replace('{wa_version}', CDSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', CDSew.user.phone.os_version).replace('{device_model}', CDSew.user.phone.device_model).replace('{device_brand}', CDSew.user.phone.device_manufacturer)})
        } else {
        return await CDSew.sendMessage(CDSew.user.jid, srmg + anomsg.replace('{user}', CDSew.user.name).replace('{wa_version}', CDSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', CDSew.user.phone.os_version).replace('{device_model}', CDSew.user.phone.device_model).replace('{device_brand}', CDSew.user.phone.device_manufacturer), MessageType.text)
}}}
        }, 50000);
        setInterval(async () => { 
        if (Raviya.AUTOBIO == 'true') {
        var timezone_bio = await Pach.timezone(CDSew.user.jid)
        var date_bio = await Pach.datebio(Raviya.LANG)
        const biography = '📅 ' + date_bio + '\n⌚ ' + timezone_bio + '\n ' + Raviya.ABT
        await CDSew.setStatus(biography)
        }
        }, 7890);
        CDSew.logger.level = Raviya.DEBUG ? 'debug' : 'warn';
        var nodb;
        if (StrSes_Db.length < 1) {
        nodb = true;
        CDSew.loadAuthInfo(Session.deCrypt(Raviya.SESSION)); 
        } else {
        CDSew.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
}
        CDSew.on ('credentials-updated', async () => {
        console.log(chalk.blueBright.italic('🚀 Login Information Updated!'));
        const authInfo = CDSew.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
        await SewQueenDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
       await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
}})    
       CDSew.on('connecting', async () => {
       console.log(`${chalk.green.bold('SEW')}${chalk.blue.bold('QUEEN')}
       ${chalk.white.bold('Version:')} ${chalk.red.bold(Raviya.VERSION)}
       ${chalk.blue.italic('🇱🇰 Try To Login WhatsApp... Please Wait...')}`);
});
        CDSew.on('open', async () => {
        console.log(
        chalk.green.bold('⚛ Login successful!')
        );
        // ==================== Password Checking ====================
        console.log(
        chalk.blueBright.italic('❯❯❯PASSWORD CHECKING❮❮❮')
        );
        if (Raviya.SEWRR == 'raviya') {
        console.log(chalk.green.bold('Password Done'));
        }
        else if (Raviya.SEWRR !== 'raviya') {
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         throw new Error("Wrong password !!");
         return;
         }
         // ==================== End Check ====================
         console.log(chalk.blueBright.italic('✧✧ Installing External Commands...'));
         var plugins = await plugindb.PluginDB.findAll();
         plugins.map(async (plugin) => {
         if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
         console.log(plugin.dataValues.name);
         var response = await got(plugin.dataValues.url);
         if (response.statusCode == 200) {
         fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
         require('./plugins/' + plugin.dataValues.name + '.js');
}}});
        console.log(chalk.blueBright.italic('⚛ Command Installed!'));
        fs.readdirSync('./plugins').forEach(plugin => {
        if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/' + plugin);
}});
        let rssewqueengg = Raviya.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('⛄ Sew Queen is' + rssewqueengg + ' ⛄'));
        if (Raviya.LANG == 'SI') {
        await CDSew.sendMessage(CDSew.user.jid, '✧සෙව් Queen වට්සැප් බොට් ක්‍රියාත්මක විය✧ ( ${Raviya.WORK_TYPE} )\nඅප්ඩේට් ඇත්දැයි බැලීමට .update ලෙසද\n\nබොට් ක්‍රියා කරන ආකාරය වෙනස් කිරීමට\n.var WORK_TYPE:public හෝ .var WORK_TYPE:private ලෙස යොදන්න\n\nsew queen වට්සැප් බොට් භාවිතා කරනවාට ස්තූතියි 😉', MessageType.text);
        }  else {
        await CDSew.sendMessage(CDSew.user.jid, '✧SEW QUEEN Whatsapp Bot started ✧ ( ${Raviya.WORK_TYPE} )\n\nto chack update ➵➵ .update \n\nto change worktype use ➵➵\n.var WORK_TYPE:public or .var WORK_TYPE:private\n\nThanks for using Sew Queen Whatsapp Bot 😉', MessageType.text);
}});
        CDSew.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (Raviya.NO_ONLINE) {
        await CDSew.updatePresence(msg.key.remoteJid, Presence.unavailable);
}
        // ==================== Greetings ====================
        if (Raviya.GIFORPP == 'pp' || Raviya.GIFORPP == 'Pp' || Raviya.GIFORPP == 'PP' || Raviya.GIFORPP == 'pP' ) {
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
        // welcome
        var gb = await getMessage(msg.key.remoteJid, 'goodbye');
        if (gb !== false) {
        let pp
        try { pp = await CDSew.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await CDSew.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
        await CDSew.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
}
        return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
        // goodbye
        var gb = await getMessage(msg.key.remoteJid);
        if (gb !== false) {
        let pp
        try { pp = await CDSew.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await CDSew.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
        await CDSew.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
}
        return;
}}
        else if (Raviya.GIFORPP == 'gif' || Raviya.GIFORPP == 'Gif' || Raviya.GIFORPP == 'GIF' || Raviya.GIFORPP == 'GIf' ) {
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
        // welcome
        var gb = await getMessage(msg.key.remoteJid, 'goodbye');
        if (gb !== false) {
        var sewqueenimage = await axios.get(Raviya.WLP, { responseType: 'arraybuffer' })
        await CDSew.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
}
        return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
        // goodbye
        var gb = await getMessage(msg.key.remoteJid);
        if (gb !== false) {
        var sewqueenimage = await axios.get(Raviya.GDB, { responseType: 'arraybuffer' })
        await CDSew.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
}
        return;
}}
        else if (Raviya.GIFORPP == 'img' || Raviya.GIFORPP == 'Img' || Raviya.GIFORPP == 'IMG' || Raviya.GIFORPP == 'image' ) {
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
        // welcome
        var gb = await getMessage(msg.key.remoteJid, 'goodbye');
        if (gb !== false) {
        var sewqueenimage = await axios.get(Raviya.WLP, { responseType: 'arraybuffer' })
        await CDSew.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.image, { caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
}
        return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
        // goodbye
        var gb = await getMessage(msg.key.remoteJid);
        if (gb !== false) {
        var sewqueenimage = await axios.get(Raviya.GDB, { responseType: 'arraybuffer' })
        await CDSew.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.image, { caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
}
        return;
}}
        // ==================== End Greetings ====================
        // ==================== Blocked Chats ====================
        if (Raviya.BLOCKCHAT !== false) {     
        var abc = Raviya.BLOCKCHAT.split(',');                            
        if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
}
        
        if ((Raviya.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
        (msg.participant && Raviya.SUDO.includes(',') ? Raviya.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == Raviya.SUDO || Raviya.SUDO.includes(',') ? Raviya.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == Raviya.SUDO)
         ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
        if (command.onlyPinned && chat.pin === undefined) return;
        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
        else if (command.onlyGrpSew === chat.jid.includes('-')) sendMsg = true;
}
        if (sendMsg) {
        var _0x9059=["\x53\x45\x4E\x44\x5F\x52\x45\x41\x44","\x6F\x6E","\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64","\x6B\x65\x79","\x63\x68\x61\x74\x52\x65\x61\x64","\x70\x61\x74\x74\x65\x72\x6E","\x6D\x61\x74\x63\x68","\x69\x6D\x61\x67\x65","\x70\x68\x6F\x74\x6F","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x76\x69\x64\x65\x6F","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x62\x75\x74\x74\x6F\x6E\x73\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65"];if(Raviya[_0x9059[0]]&& command[_0x9059[1]]=== undefined){ await CDSew[_0x9059[4]](msg[_0x9059[3]][_0x9059[2]])};var match=text_msg[_0x9059[6]](command[_0x9059[5]]);if(command[_0x9059[1]]!== undefined&& (command[_0x9059[1]]=== _0x9059[7]|| command[_0x9059[1]]=== _0x9059[8])&& msg[_0x9059[10]][_0x9059[9]]!== null){whats=  new Image(CDSew,msg)}else {if(command[_0x9059[1]]!== undefined&& (command[_0x9059[1]]=== _0x9059[11])&& msg[_0x9059[10]][_0x9059[12]]!== null){whats=  new Video(CDSew,msg)}else {if(command[_0x9059[1]]!== undefined&& (command[_0x9059[1]]=== _0x9059[13])&& msg[_0x9059[10]][_0x9059[13]]!== null){whats=  new listResponseMessage(CDSew,msg)}else {if(command[_0x9059[1]]!== undefined&& (command[_0x9059[1]]=== _0x9059[14])&& msg[_0x9059[10]][_0x9059[14]]!== null){whats=  new buttonsResponseMessage(CDSew,msg)}else {whats=  new Message(CDSew,msg)}}}}
                       
        try {
        await command.function(whats, match);
        } catch (error) {
        if (Raviya.LANG == 'SI') {
        await CDSew.sendMessage(CDSew.user.jid, 'දෝශයක් හදුනා ගැනිනි\n\nදෝශය: *${error}*\n\nදෝශය සවයංක්‍රීයව සකසා ගැනිනි\n\nකුමක් හෝ ගැටලුවක් ඇති උවහොත් අපගේ telegrame ( *t.me/SewQueen* ) ගෲපයට හෝ helping ගෲප් එකකට ඇතුලත් වන්න \n*( https://chat.whatsapp.com/Loh2qrwzIleAR7cndME3CG )*\n*( https://chat.whatsapp.com/Hxyj6cqaMEJ3aXeisxaZeq )*\n*( https://chat.whatsapp.com/H0YB8hX54Vj9GdR9uQxVL8 )* ', MessageType.text);
        } else { await CDSew.sendMessage(CDSew.user.jid, '*Error Detected*\n\nError : *${error}*\n\nAn error has occurred!\n\nYou Can Join our  telegrame ( *t.me/SewQueen* ) Group or Whatsapp helping group.\n*( https://chat.whatsapp.com/Loh2qrwzIleAR7cndME3CG )*\n*( https://chat.whatsapp.com/Hxyj6cqaMEJ3aXeisxaZeq )*\n*( https://chat.whatsapp.com/H0YB8hX54Vj9GdR9uQxVL8 )* ', MessageType.text);
}}}
}})});;
        try {
        await CDSew.connect();
        } catch {
        if (!nodb) {
        console.log(chalk.red.bold('Loading Old Version Session...'))
        CDSew.loadAuthInfo(Session.deCrypt(Raviya.SESSION)); 
        try {
        await CDSew.connect();
        } catch {
        return;
}}}}
        sewQueen();




