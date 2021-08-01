/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const {spawnSync} = require('child_process');
const fs = require('fs');

const NNVL = "text to image all manu.. වචන රූප බවට පත් කිරීමට යොදාගත හැක"

if (Config.WORKTYPE == 'private') {
     
        QueenSew.newcmdaddtosew({pattern: 'sewmaker', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('👑 *SEW TEXT MAKER* 👑\n  \n_වචන පින්තූර බවට පත් කිරීමෙ මෙනු ලබා ගැනීමට පහත කමාන්ඩ් භාවිතාකරන්න_\n\n\n\n💠 .text1\n\n💠 .text2\n\n💠 .text3\n\n💠 .text4\n\n💠 .text5\n\n💠 .text6\n\n💠 .text7\n\n💠 .text8\n\n💠 .text9\n\n\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text1', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.dota2*\n✨Desc: it makes metal dota2 text\n💍 Example : *.dota2 Ravindu*\n\n❄️Usage: *.avo*\n✨Desc: it makes metal avo text\n💍 Example : *.avo Ravindu*\n\n❄️Usage: *.1lol*\n✨Desc: it makes metal 1lol text\n💍 Example : *.1lol Ravindu*\n\n❄️Usage: *.2lol*\n✨Desc: it makes metal 2lol text\n💍 Example : *.2lol Ravindu*\n\n❄️Usage: *.3lol*\n✨Desc: it makes metal 3lol text\n💍 Example : *.3lol Ravind*\n\n❄️Usage: *.stars*\n✨Desc: it makes metal stars text\n💍 Example : *.stara Ravindu*\n\n❄️Usage: *.fur*\n✨Desc: it makes metal fur text\n💍 Example : *.fur Ravindu*\n\n❄️Usage: *.gerbang*\n✨Desc: it makes metal gerbang text\n💍 Example : *.gerbang Ravindu*\n\n❄️Usage: *.grad*\n✨Desc: it makes metal grad text\n💍 Example : *.grad Ravindu*\n\n❄️Usage: *.1spark*\n✨Desc: it makes metal 1spark text\n💍 Example : *.1spark Ravindu*\n\n❄️Usage: *.2spark*\n✨Desc: it makes metal 2spark text\n💍 Example : *.2spark Ravindu*\n\n❄️Usage: *.3spark*\n✨Desc: it makes metal 3spark text\n💍 Example : *.3spark Ravindu*\n\n❄️Usage: *.4spark*\n✨Desc: it makes metal 4spark text\n💍 Example : *.4spark Ravindu*\n\n❄️Usage: *.5spark*\n✨Desc: it makes metal 5spark text\n💍 Example : *.5spark Ravindu*\n\n❄️Usage: *.biscuit*\n✨Desc: it makes metal biscuit text\n💍 Example : *.biscuit Ravindu*\n\n❄️Usage: *.fish*\n✨Desc: it makes metal fisha text\n💍 Example : *.fish Ravindu*\n\n❄️Usage: *.rainbow*\n✨Desc: it makes metal rainbow text\n💍 Example : *.rainbow Ravindu*\n\n❄️Usage: *.honny*\n✨Desc: it makes metal honny text\n💍 Example : *.honny Ravindu*\n\n❄️Usage: *.fruit*\n✨Desc: it makes metal fruit text\n💍 Example : *.fruit Ravindu*\n\n❄️Usage: *.bluemetal*\n✨Desc: it makes metal bluemetal text\n💍 Example : *.bluemetal Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text2', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.1candi*\n✨Desc: it makes metal 1candi text\n💍 Example : *.1candi Ravindu*\n\n❄️Usage: *.2carbon*\n✨Desc: it makes metal 2carbon text\n💍 Example : *.2carbon Ravindu*\n\n❄️Usage: *.2metal*\n✨Desc: it makes metal 2metal text\n💍 Example : *.2metal Ravindu*\n\n❄️Usage: *.1glitter*\n✨Desc: it makes metal 1glitter text\n💍 Example : *.1glitter Ravindu*\n\n❄️Usage: *.2glitter*\n✨Desc: it makes metal 2glitter text\n💍 Example : *.2glitter Ravind*\n\n❄️Usage: *.3glitter*\n✨Desc: it makes metal 3glitter text\n💍 Example : *.3glitter Ravindu*\n\n❄️Usage: *.4glitter*\n✨Desc: it makes metal 4glitter text\n💍 Example : *.4glitter Ravindu*\n\n❄️Usage: *.5glitter*\n✨Desc: it makes metal 5glitter text\n💍 Example : *.5glitter Ravindu*\n\n❄️Usage: *.6glitter*\n✨Desc: it makes metal 6glitter text\n💍 Example : *.6glitter Ravindu*\n\n❄️Usage: *.7glitter*\n✨Desc: it makes metal 7glitter text\n💍 Example : *.7glitter Ravindu*\n\n❄️Usage: *.1jewelry*\n✨Desc: it makes metal 1jewelry text\n💍 Example : *.1jewelry Ravindu*\n\n❄️Usage: *.2jewelry*\n✨Desc: it makes metal 2jewelry text\n💍 Example : *.2jewelry Ravindu*\n\n❄️Usage: *.3jewelry*\n✨Desc: it makes metal 3jewelry text\n💍 Example : *.3jewelry Ravindu*\n\n❄️Usage: *.4jewelry*\n✨Desc: it makes metal 4jewelry text\n💍 Example : *.4jewelry Ravindu*\n\n❄️Usage: *.5jewelry*\n✨Desc: it makes metal 5jewelry text\n💍 Example : *.5jewelry Ravindu*\n\n❄️Usage: *.6jewelry*\n✨Desc: it makes metal 6jewelry text\n💍 Example : *.6jewelry Ravindu*\n\n❄️Usage: *.7jewelry*\n✨Desc: it makes metal 7jewelry text\n💍 Example : *.7jewelry Ravindu*\n\n❄️Usage: *.8jewelry*\n✨Desc: it makes metal 8jewelry text\n💍 Example : *.8jewelry Ravindu*\n\n❄️Usage: *.honny*\n✨Desc: it makes metal honny text\n💍 Example : *.honny Ravindu*\n\n❄️Usage: *.rainbow*\n✨Desc: it makes metal rainbow text\n💍 Example : *.rainbow Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text3', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.3cake*\n✨Desc: it makes metal 3cake text\n💍 Example : *.3cake Ravindu*\n\n❄️Usage: *.captain*\n✨Desc: it makes metal captain text\n💍 Example : *.captain Ravindu*\n\n❄️Usage: *.bagel*\n✨Desc: it makes metal bagel text\n💍 Example : *.bagel Ravindu*\n\n❄️Usage: *.1gem*\n✨Desc: it makes metal 1gem text\n💍 Example : *.1gem Ravindu*\n\n❄️Usage: *.berry*\n✨Desc: it makes metal berry text\n💍 Example : *.berry Ravindu*\n\n❄️Usage: *.2blood*\n✨Desc: it makes metal 2blood text\n💍 Example : *.2blood Ravindu*\n\n❄️Usage: *.3blood*\n✨Desc: it makes metal 3blood text\n💍 Example : *.3blood Ravindu*\n\n❄️Usage: *.1glass*\n✨Desc: it makes metal 1glass text\n💍 Example : *.1glass Ravindu*\n\n❄️Usage: *.lava*\n✨Desc: it makes metal lava text\n💍 Example : *.lava Ravindu*\n\n❄️Usage: *.rock*\n✨Desc: it makes metal rock text\n💍 Example : *.rock Ravindu*\n\n❄️Usage: *.1decora*\n✨Desc: it makes metal 1decora text\n💍 Example : *.1decora Ravindu*\n\n❄️Usage: *.2decora*\n✨Desc: it makes metal 2decora text\n💍 Example : *.2decora Ravindu*\n\n❄️Usage: *.3decora*\n✨Desc: it makes metal 3decora text\n💍 Example : *.3decora Ravindu*\n\n❄️Usage: *.1foil*\n✨Desc: it makes metal 1foil text\n💍 Example : *.1foil Ravindu*\n\n❄️Usage: *.2foil*\n✨Desc: it makes metal 2foil text\n💍 Example : *.2foil Ravindu*\n\n❄️Usage: *.3foil*\n✨Desc: it makes metal 3foil text\n💍 Example : *.3foil Ravindu*\n\n❄️Usage: *.4foil*\n✨Desc: it makes metal 4foil text\n💍 Example : *.4foil Ravindu*\n\n❄️Usage: *.5foil*\n✨Desc: it makes metal 5foil text\n💍 Example : *.5foil Ravindu*\n\n❄️Usage: *.6foil*\n✨Desc: it makes metal 6foil text\n💍 Example : *.6foil Ravindu*\n\n❄️Usage: *.7foil*\n✨Desc: it makes metal 7foil text\n💍 Example : *.7foil Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text4', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.steel*\n✨Desc: it makes metal steel text\n💍 Example : *.steel Ravindu*\n\n❄️Usage: *.1glossy*\n✨Desc: it makes metal 1glossy text\n💍 Example : *.1glossy Ravindu*\n\n❄️Usage: *.2glossy*\n✨Desc: it makes metal 2glossy text\n💍 Example : *.2glossy Ravindu*\n\n❄️Usage: *.denim*\n✨Desc: it makes metal denim text\n💍 Example : *.denim Ravindu*\n\n❄️Usage: *.joker*\n✨Desc: it makes metal joker text\n💍 Example : *.joker Ravindu*\n\n❄️Usage: *.wicker*\n✨Desc: it makes metal wicker text\n💍 Example : *.wicker Ravindu*\n\n❄️Usage: *.skeleton*\n✨Desc: it makes metal skeleton text\n💍 Example : *.skeleton Ravindu*\n\n❄️Usage: *.xmas3d*\n✨Desc: it makes metal xmas3d text\n💍 Example : *.xmas3d Ravindu*\n\n❄️Usage: *.helloween*\n✨Desc: it makes metal helloween text\n💍 Example : *.helloween Ravindu*\n\n❄️Usage: *.neon1s*\n✨Desc: it makes metal neon1s text\n💍 Example : *.neon1s Ravindu*\n\n❄️Usage: *.new1y*\n✨Desc: it makes metal new1y text\n💍 Example : *.new1y Ravindu*\n\n❄️Usage: *.1fabric*\n✨Desc: it makes metal 1fabric text\n💍 Example : *.1fabric Ravindu*\n\n❄️Usage: *.purpule*\n✨Desc: it makes metal purpule text\n💍 Example : *.purpule Ravindu*\n\n❄️Usage: *.holo3d*\n✨Desc: it makes metal holo3d text\n💍 Example : *.holo3d Ravindu*\n\n❄️Usage: *.minion3d*\n✨Desc: it makes metal minion3d text\n💍 Example : *.minion3d Ravindu*\n\n❄️Usage: *.neongalaxy*\n✨Desc: it makes metal neongalaxy text\n💍 Example : *.neongalaxy Ravindu*\n\n❄️Usage: *.darkgold*\n✨Desc: it makes metal darkgold text\n💍 Example : *.darkgold Ravindu*\n\n❄️Usage: *.1sandwriting*\n✨Desc: it makes metal 1sandwriting text\n💍 Example : *.1sandwriting Ravindu*\n\n❄️Usage: *.cloudsky*\n✨Desc: it makes metal cloudsky text\n💍 Example : *.cloudsky Ravindu*\n\n❄️Usage: *.3dluxury*\n✨Desc: it makes metal 3dluxury text\n💍 Example : *.3dluxury Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text5', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.sandsum*\n✨Desc: it makes metal sandsum text\n💍 Example : *.sandsum Ravindu*\n\n❄️Usage: *.1917*\n✨Desc: it makes metal 1917 text\n💍 Example : *.1917 Ravindu*\n\n❄️Usage: *.vtext*\n✨Desc: it makes metal vtext text\n💍 Example : *.vtext Ravindu*\n\n❄️Usage: *.ptext*\n✨Desc: it makes metal ptext text\n💍 Example : *.ptext Ravindu*\n\n❄️Usage: *.colortext*\n✨Desc: it makes metal colortext text\n💍 Example : *.colortext Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text9', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.shine*\n✨Desc: it makes metal shine text\n💍 Example : *.shine Ravindu*\n\n❄️Usage: *.chrome*\n✨Desc: it makes metal chrome text\n💍 Example : *.chrome Ravindu*\n\n❄️Usage: *.kueu*\n✨Desc: it makes metal kueu text\n💍 Example : *.kueu Ravindu*\n\n❄️Usage: *.2rainbow*\n✨Desc: it makes metal 2rainbow text\n💍 Example : *.2rainbow Ravindu*\n\n❄️Usage: *.metalic*\n✨Desc: it makes metal metalic text\n💍 Example : *.metalic Ravind*\n\n❄️Usage: *.melon*\n✨Desc: it makes melon stars text\n💍 Example : *.melon Ravindu*\n\n❄️Usage: *.underweb*\n✨Desc: it makes metal underweb text\n💍 Example : *.underweb Ravindu*\n\n❄️Usage: *.multi*\n✨Desc: it makes metal multi text\n💍 Example : *.multi Ravindu*\n\n❄️Usage: *.2coffe*\n✨Desc: it makes metal 2coffe text\n💍 Example : *.2coffe Ravindu*\n\n❄️Usage: *.2smoke*\n✨Desc: it makes metal 2smoke text\n💍 Example : *.2smoke Ravindu*\n\n❄️Usage: *.bevel*\n✨Desc: it makes metal bevel text\n💍 Example : *.bevel Ravindu*\n\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·')
   }));
   
}

else if (Config.WORKTYPE == 'public') {

     QueenSew.newcmdaddtosew({pattern: 'sewmaker', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('👑 *SEW TEXT MAKER* 👑\n  \n_වචන පින්තූර බවට පත් කිරීමෙ මෙනු ලබා ගැනීමට පහත කමාන්ඩ් භාවිතාකරන්න_\n\n\n\n💠 .text1\n\n💠 .text2\n\n💠 .text3\n\n💠 .text4\n\n💠 .text5\n\n💠 .text6\n\n💠 .text7\n\n💠 .text8\n\n💠 .text9\n\n\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text1', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.dota2*\n✨Desc: it makes metal dota2 text\n💍 Example : *.dota2 Ravindu*\n\n❄️Usage: *.avo*\n✨Desc: it makes metal avo text\n💍 Example : *.avo Ravindu*\n\n❄️Usage: *.1lol*\n✨Desc: it makes metal 1lol text\n💍 Example : *.1lol Ravindu*\n\n❄️Usage: *.2lol*\n✨Desc: it makes metal 2lol text\n💍 Example : *.2lol Ravindu*\n\n❄️Usage: *.3lol*\n✨Desc: it makes metal 3lol text\n💍 Example : *.3lol Ravind*\n\n❄️Usage: *.stars*\n✨Desc: it makes metal stars text\n💍 Example : *.stara Ravindu*\n\n❄️Usage: *.fur*\n✨Desc: it makes metal fur text\n💍 Example : *.fur Ravindu*\n\n❄️Usage: *.gerbang*\n✨Desc: it makes metal gerbang text\n💍 Example : *.gerbang Ravindu*\n\n❄️Usage: *.grad*\n✨Desc: it makes metal grad text\n💍 Example : *.grad Ravindu*\n\n❄️Usage: *.1spark*\n✨Desc: it makes metal 1spark text\n💍 Example : *.1spark Ravindu*\n\n❄️Usage: *.2spark*\n✨Desc: it makes metal 2spark text\n💍 Example : *.2spark Ravindu*\n\n❄️Usage: *.3spark*\n✨Desc: it makes metal 3spark text\n💍 Example : *.3spark Ravindu*\n\n❄️Usage: *.4spark*\n✨Desc: it makes metal 4spark text\n💍 Example : *.4spark Ravindu*\n\n❄️Usage: *.5spark*\n✨Desc: it makes metal 5spark text\n💍 Example : *.5spark Ravindu*\n\n❄️Usage: *.biscuit*\n✨Desc: it makes metal biscuit text\n💍 Example : *.biscuit Ravindu*\n\n❄️Usage: *.fish*\n✨Desc: it makes metal fisha text\n💍 Example : *.fish Ravindu*\n\n❄️Usage: *.rainbow*\n✨Desc: it makes metal rainbow text\n💍 Example : *.rainbow Ravindu*\n\n❄️Usage: *.honny*\n✨Desc: it makes metal honny text\n💍 Example : *.honny Ravindu*\n\n❄️Usage: *.fruit*\n✨Desc: it makes metal fruit text\n💍 Example : *.fruit Ravindu*\n\n❄️Usage: *.bluemetal*\n✨Desc: it makes metal bluemetal text\n💍 Example : *.bluemetal Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text2', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.1candi*\n✨Desc: it makes metal 1candi text\n💍 Example : *.1candi Ravindu*\n\n❄️Usage: *.2carbon*\n✨Desc: it makes metal 2carbon text\n💍 Example : *.2carbon Ravindu*\n\n❄️Usage: *.2metal*\n✨Desc: it makes metal 2metal text\n💍 Example : *.2metal Ravindu*\n\n❄️Usage: *.1glitter*\n✨Desc: it makes metal 1glitter text\n💍 Example : *.1glitter Ravindu*\n\n❄️Usage: *.2glitter*\n✨Desc: it makes metal 2glitter text\n💍 Example : *.2glitter Ravind*\n\n❄️Usage: *.3glitter*\n✨Desc: it makes metal 3glitter text\n💍 Example : *.3glitter Ravindu*\n\n❄️Usage: *.4glitter*\n✨Desc: it makes metal 4glitter text\n💍 Example : *.4glitter Ravindu*\n\n❄️Usage: *.5glitter*\n✨Desc: it makes metal 5glitter text\n💍 Example : *.5glitter Ravindu*\n\n❄️Usage: *.6glitter*\n✨Desc: it makes metal 6glitter text\n💍 Example : *.6glitter Ravindu*\n\n❄️Usage: *.7glitter*\n✨Desc: it makes metal 7glitter text\n💍 Example : *.7glitter Ravindu*\n\n❄️Usage: *.1jewelry*\n✨Desc: it makes metal 1jewelry text\n💍 Example : *.1jewelry Ravindu*\n\n❄️Usage: *.2jewelry*\n✨Desc: it makes metal 2jewelry text\n💍 Example : *.2jewelry Ravindu*\n\n❄️Usage: *.3jewelry*\n✨Desc: it makes metal 3jewelry text\n💍 Example : *.3jewelry Ravindu*\n\n❄️Usage: *.4jewelry*\n✨Desc: it makes metal 4jewelry text\n💍 Example : *.4jewelry Ravindu*\n\n❄️Usage: *.5jewelry*\n✨Desc: it makes metal 5jewelry text\n💍 Example : *.5jewelry Ravindu*\n\n❄️Usage: *.6jewelry*\n✨Desc: it makes metal 6jewelry text\n💍 Example : *.6jewelry Ravindu*\n\n❄️Usage: *.7jewelry*\n✨Desc: it makes metal 7jewelry text\n💍 Example : *.7jewelry Ravindu*\n\n❄️Usage: *.8jewelry*\n✨Desc: it makes metal 8jewelry text\n💍 Example : *.8jewelry Ravindu*\n\n❄️Usage: *.honny*\n✨Desc: it makes metal honny text\n💍 Example : *.honny Ravindu*\n\n❄️Usage: *.rainbow*\n✨Desc: it makes metal rainbow text\n💍 Example : *.rainbow Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text3', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.3cake*\n✨Desc: it makes metal 3cake text\n💍 Example : *.3cake Ravindu*\n\n❄️Usage: *.captain*\n✨Desc: it makes metal captain text\n💍 Example : *.captain Ravindu*\n\n❄️Usage: *.bagel*\n✨Desc: it makes metal bagel text\n💍 Example : *.bagel Ravindu*\n\n❄️Usage: *.1gem*\n✨Desc: it makes metal 1gem text\n💍 Example : *.1gem Ravindu*\n\n❄️Usage: *.berry*\n✨Desc: it makes metal berry text\n💍 Example : *.berry Ravindu*\n\n❄️Usage: *.2blood*\n✨Desc: it makes metal 2blood text\n💍 Example : *.2blood Ravindu*\n\n❄️Usage: *.3blood*\n✨Desc: it makes metal 3blood text\n💍 Example : *.3blood Ravindu*\n\n❄️Usage: *.1glass*\n✨Desc: it makes metal 1glass text\n💍 Example : *.1glass Ravindu*\n\n❄️Usage: *.lava*\n✨Desc: it makes metal lava text\n💍 Example : *.lava Ravindu*\n\n❄️Usage: *.rock*\n✨Desc: it makes metal rock text\n💍 Example : *.rock Ravindu*\n\n❄️Usage: *.1decora*\n✨Desc: it makes metal 1decora text\n💍 Example : *.1decora Ravindu*\n\n❄️Usage: *.2decora*\n✨Desc: it makes metal 2decora text\n💍 Example : *.2decora Ravindu*\n\n❄️Usage: *.3decora*\n✨Desc: it makes metal 3decora text\n💍 Example : *.3decora Ravindu*\n\n❄️Usage: *.1foil*\n✨Desc: it makes metal 1foil text\n💍 Example : *.1foil Ravindu*\n\n❄️Usage: *.2foil*\n✨Desc: it makes metal 2foil text\n💍 Example : *.2foil Ravindu*\n\n❄️Usage: *.3foil*\n✨Desc: it makes metal 3foil text\n💍 Example : *.3foil Ravindu*\n\n❄️Usage: *.4foil*\n✨Desc: it makes metal 4foil text\n💍 Example : *.4foil Ravindu*\n\n❄️Usage: *.5foil*\n✨Desc: it makes metal 5foil text\n💍 Example : *.5foil Ravindu*\n\n❄️Usage: *.6foil*\n✨Desc: it makes metal 6foil text\n💍 Example : *.6foil Ravindu*\n\n❄️Usage: *.7foil*\n✨Desc: it makes metal 7foil text\n💍 Example : *.7foil Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text4', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.steel*\n✨Desc: it makes metal steel text\n💍 Example : *.steel Ravindu*\n\n❄️Usage: *.1glossy*\n✨Desc: it makes metal 1glossy text\n💍 Example : *.1glossy Ravindu*\n\n❄️Usage: *.2glossy*\n✨Desc: it makes metal 2glossy text\n💍 Example : *.2glossy Ravindu*\n\n❄️Usage: *.denim*\n✨Desc: it makes metal denim text\n💍 Example : *.denim Ravindu*\n\n❄️Usage: *.joker*\n✨Desc: it makes metal joker text\n💍 Example : *.joker Ravindu*\n\n❄️Usage: *.wicker*\n✨Desc: it makes metal wicker text\n💍 Example : *.wicker Ravindu*\n\n❄️Usage: *.skeleton*\n✨Desc: it makes metal skeleton text\n💍 Example : *.skeleton Ravindu*\n\n❄️Usage: *.xmas3d*\n✨Desc: it makes metal xmas3d text\n💍 Example : *.xmas3d Ravindu*\n\n❄️Usage: *.helloween*\n✨Desc: it makes metal helloween text\n💍 Example : *.helloween Ravindu*\n\n❄️Usage: *.neon1s*\n✨Desc: it makes metal neon1s text\n💍 Example : *.neon1s Ravindu*\n\n❄️Usage: *.new1y*\n✨Desc: it makes metal new1y text\n💍 Example : *.new1y Ravindu*\n\n❄️Usage: *.1fabric*\n✨Desc: it makes metal 1fabric text\n💍 Example : *.1fabric Ravindu*\n\n❄️Usage: *.purpule*\n✨Desc: it makes metal purpule text\n💍 Example : *.purpule Ravindu*\n\n❄️Usage: *.holo3d*\n✨Desc: it makes metal holo3d text\n💍 Example : *.holo3d Ravindu*\n\n❄️Usage: *.minion3d*\n✨Desc: it makes metal minion3d text\n💍 Example : *.minion3d Ravindu*\n\n❄️Usage: *.neongalaxy*\n✨Desc: it makes metal neongalaxy text\n💍 Example : *.neongalaxy Ravindu*\n\n❄️Usage: *.darkgold*\n✨Desc: it makes metal darkgold text\n💍 Example : *.darkgold Ravindu*\n\n❄️Usage: *.1sandwriting*\n✨Desc: it makes metal 1sandwriting text\n💍 Example : *.1sandwriting Ravindu*\n\n❄️Usage: *.cloudsky*\n✨Desc: it makes metal cloudsky text\n💍 Example : *.cloudsky Ravindu*\n\n❄️Usage: *.3dluxury*\n✨Desc: it makes metal 3dluxury text\n💍 Example : *.3dluxury Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text5', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.sandsum*\n✨Desc: it makes metal sandsum text\n💍 Example : *.sandsum Ravindu*\n\n❄️Usage: *.1917*\n✨Desc: it makes metal 1917 text\n💍 Example : *.1917 Ravindu*\n\n❄️Usage: *.vtext*\n✨Desc: it makes metal vtext text\n💍 Example : *.vtext Ravindu*\n\n❄️Usage: *.ptext*\n✨Desc: it makes metal ptext text\n💍 Example : *.ptext Ravindu*\n\n❄️Usage: *.colortext*\n✨Desc: it makes metal colortext text\n💍 Example : *.colortext Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text9', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.shine*\n✨Desc: it makes metal shine text\n💍 Example : *.shine Ravindu*\n\n❄️Usage: *.chrome*\n✨Desc: it makes metal chrome text\n💍 Example : *.chrome Ravindu*\n\n❄️Usage: *.kueu*\n✨Desc: it makes metal kueu text\n💍 Example : *.kueu Ravindu*\n\n❄️Usage: *.2rainbow*\n✨Desc: it makes metal 2rainbow text\n💍 Example : *.2rainbow Ravindu*\n\n❄️Usage: *.metalic*\n✨Desc: it makes metal metalic text\n💍 Example : *.metalic Ravind*\n\n❄️Usage: *.melon*\n✨Desc: it makes melon stars text\n💍 Example : *.melon Ravindu*\n\n❄️Usage: *.underweb*\n✨Desc: it makes metal underweb text\n💍 Example : *.underweb Ravindu*\n\n❄️Usage: *.multi*\n✨Desc: it makes metal multi text\n💍 Example : *.multi Ravindu*\n\n❄️Usage: *.2coffe*\n✨Desc: it makes metal 2coffe text\n💍 Example : *.2coffe Ravindu*\n\n❄️Usage: *.2smoke*\n✨Desc: it makes metal 2smoke text\n💍 Example : *.2smoke Ravindu*\n\n❄️Usage: *.bevel*\n✨Desc: it makes metal bevel text\n💍 Example : *.bevel Ravindu*\n\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'sewmaker', fromSew: false, desc: NNVL}, (async (message, match) => {
      await message.sendMessage('👑 *SEW TEXT MAKER* 👑\n  \n_වචන පින්තූර බවට පත් කිරීමෙ මෙනු ලබා ගැනීමට පහත කමාන්ඩ් භාවිතාකරන්න_\n\n\n\n💠 .text1\n\n💠 .text2\n\n💠 .text3\n\n💠 .text4\n\n💠 .text5\n\n💠 .text6\n\n💠 .text7\n\n💠 .text8\n\n\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text1', fromSew: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.dota2*\n✨Desc: it makes metal dota2 text\n💍 Example : *.dota2 Ravindu*\n\n❄️Usage: *.avo*\n✨Desc: it makes metal avo text\n💍 Example : *.avo Ravindu*\n\n❄️Usage: *.1lol*\n✨Desc: it makes metal 1lol text\n💍 Example : *.1lol Ravindu*\n\n❄️Usage: *.2lol*\n✨Desc: it makes metal 2lol text\n💍 Example : *.2lol Ravindu*\n\n❄️Usage: *.3lol*\n✨Desc: it makes metal 3lol text\n💍 Example : *.3lol Ravind*\n\n❄️Usage: *.stars*\n✨Desc: it makes metal stars text\n💍 Example : *.stara Ravindu*\n\n❄️Usage: *.fur*\n✨Desc: it makes metal fur text\n💍 Example : *.fur Ravindu*\n\n❄️Usage: *.gerbang*\n✨Desc: it makes metal gerbang text\n💍 Example : *.gerbang Ravindu*\n\n❄️Usage: *.grad*\n✨Desc: it makes metal grad text\n💍 Example : *.grad Ravindu*\n\n❄️Usage: *.1spark*\n✨Desc: it makes metal 1spark text\n💍 Example : *.1spark Ravindu*\n\n❄️Usage: *.2spark*\n✨Desc: it makes metal 2spark text\n💍 Example : *.2spark Ravindu*\n\n❄️Usage: *.3spark*\n✨Desc: it makes metal 3spark text\n💍 Example : *.3spark Ravindu*\n\n❄️Usage: *.4spark*\n✨Desc: it makes metal 4spark text\n💍 Example : *.4spark Ravindu*\n\n❄️Usage: *.5spark*\n✨Desc: it makes metal 5spark text\n💍 Example : *.5spark Ravindu*\n\n❄️Usage: *.biscuit*\n✨Desc: it makes metal biscuit text\n💍 Example : *.biscuit Ravindu*\n\n❄️Usage: *.fish*\n✨Desc: it makes metal fisha text\n💍 Example : *.fish Ravindu*\n\n❄️Usage: *.rainbow*\n✨Desc: it makes metal rainbow text\n💍 Example : *.rainbow Ravindu*\n\n❄️Usage: *.honny*\n✨Desc: it makes metal honny text\n💍 Example : *.honny Ravindu*\n\n❄️Usage: *.fruit*\n✨Desc: it makes metal fruit text\n💍 Example : *.fruit Ravindu*\n\n❄️Usage: *.bluemetal*\n✨Desc: it makes metal bluemetal text\n💍 Example : *.bluemetal Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text2', fromSew: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.1candi*\n✨Desc: it makes metal 1candi text\n💍 Example : *.1candi Ravindu*\n\n❄️Usage: *.2carbon*\n✨Desc: it makes metal 2carbon text\n💍 Example : *.2carbon Ravindu*\n\n❄️Usage: *.2metal*\n✨Desc: it makes metal 2metal text\n💍 Example : *.2metal Ravindu*\n\n❄️Usage: *.1glitter*\n✨Desc: it makes metal 1glitter text\n💍 Example : *.1glitter Ravindu*\n\n❄️Usage: *.2glitter*\n✨Desc: it makes metal 2glitter text\n💍 Example : *.2glitter Ravind*\n\n❄️Usage: *.3glitter*\n✨Desc: it makes metal 3glitter text\n💍 Example : *.3glitter Ravindu*\n\n❄️Usage: *.4glitter*\n✨Desc: it makes metal 4glitter text\n💍 Example : *.4glitter Ravindu*\n\n❄️Usage: *.5glitter*\n✨Desc: it makes metal 5glitter text\n💍 Example : *.5glitter Ravindu*\n\n❄️Usage: *.6glitter*\n✨Desc: it makes metal 6glitter text\n💍 Example : *.6glitter Ravindu*\n\n❄️Usage: *.7glitter*\n✨Desc: it makes metal 7glitter text\n💍 Example : *.7glitter Ravindu*\n\n❄️Usage: *.1jewelry*\n✨Desc: it makes metal 1jewelry text\n💍 Example : *.1jewelry Ravindu*\n\n❄️Usage: *.2jewelry*\n✨Desc: it makes metal 2jewelry text\n💍 Example : *.2jewelry Ravindu*\n\n❄️Usage: *.3jewelry*\n✨Desc: it makes metal 3jewelry text\n💍 Example : *.3jewelry Ravindu*\n\n❄️Usage: *.4jewelry*\n✨Desc: it makes metal 4jewelry text\n💍 Example : *.4jewelry Ravindu*\n\n❄️Usage: *.5jewelry*\n✨Desc: it makes metal 5jewelry text\n💍 Example : *.5jewelry Ravindu*\n\n❄️Usage: *.6jewelry*\n✨Desc: it makes metal 6jewelry text\n💍 Example : *.6jewelry Ravindu*\n\n❄️Usage: *.7jewelry*\n✨Desc: it makes metal 7jewelry text\n💍 Example : *.7jewelry Ravindu*\n\n❄️Usage: *.8jewelry*\n✨Desc: it makes metal 8jewelry text\n💍 Example : *.8jewelry Ravindu*\n\n❄️Usage: *.honny*\n✨Desc: it makes metal honny text\n💍 Example : *.honny Ravindu*\n\n❄️Usage: *.rainbow*\n✨Desc: it makes metal rainbow text\n💍 Example : *.rainbow Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text3', fromSew: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.3cake*\n✨Desc: it makes metal 3cake text\n💍 Example : *.3cake Ravindu*\n\n❄️Usage: *.captain*\n✨Desc: it makes metal captain text\n💍 Example : *.captain Ravindu*\n\n❄️Usage: *.bagel*\n✨Desc: it makes metal bagel text\n💍 Example : *.bagel Ravindu*\n\n❄️Usage: *.1gem*\n✨Desc: it makes metal 1gem text\n💍 Example : *.1gem Ravindu*\n\n❄️Usage: *.berry*\n✨Desc: it makes metal berry text\n💍 Example : *.berry Ravindu*\n\n❄️Usage: *.2blood*\n✨Desc: it makes metal 2blood text\n💍 Example : *.2blood Ravindu*\n\n❄️Usage: *.3blood*\n✨Desc: it makes metal 3blood text\n💍 Example : *.3blood Ravindu*\n\n❄️Usage: *.1glass*\n✨Desc: it makes metal 1glass text\n💍 Example : *.1glass Ravindu*\n\n❄️Usage: *.lava*\n✨Desc: it makes metal lava text\n💍 Example : *.lava Ravindu*\n\n❄️Usage: *.rock*\n✨Desc: it makes metal rock text\n💍 Example : *.rock Ravindu*\n\n❄️Usage: *.1decora*\n✨Desc: it makes metal 1decora text\n💍 Example : *.1decora Ravindu*\n\n❄️Usage: *.2decora*\n✨Desc: it makes metal 2decora text\n💍 Example : *.2decora Ravindu*\n\n❄️Usage: *.3decora*\n✨Desc: it makes metal 3decora text\n💍 Example : *.3decora Ravindu*\n\n❄️Usage: *.1foil*\n✨Desc: it makes metal 1foil text\n💍 Example : *.1foil Ravindu*\n\n❄️Usage: *.2foil*\n✨Desc: it makes metal 2foil text\n💍 Example : *.2foil Ravindu*\n\n❄️Usage: *.3foil*\n✨Desc: it makes metal 3foil text\n💍 Example : *.3foil Ravindu*\n\n❄️Usage: *.4foil*\n✨Desc: it makes metal 4foil text\n💍 Example : *.4foil Ravindu*\n\n❄️Usage: *.5foil*\n✨Desc: it makes metal 5foil text\n💍 Example : *.5foil Ravindu*\n\n❄️Usage: *.6foil*\n✨Desc: it makes metal 6foil text\n💍 Example : *.6foil Ravindu*\n\n❄️Usage: *.7foil*\n✨Desc: it makes metal 7foil text\n💍 Example : *.7foil Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text4', fromSew: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.steel*\n✨Desc: it makes metal steel text\n💍 Example : *.steel Ravindu*\n\n❄️Usage: *.1glossy*\n✨Desc: it makes metal 1glossy text\n💍 Example : *.1glossy Ravindu*\n\n❄️Usage: *.2glossy*\n✨Desc: it makes metal 2glossy text\n💍 Example : *.2glossy Ravindu*\n\n❄️Usage: *.denim*\n✨Desc: it makes metal denim text\n💍 Example : *.denim Ravindu*\n\n❄️Usage: *.joker*\n✨Desc: it makes metal joker text\n💍 Example : *.joker Ravindu*\n\n❄️Usage: *.wicker*\n✨Desc: it makes metal wicker text\n💍 Example : *.wicker Ravindu*\n\n❄️Usage: *.skeleton*\n✨Desc: it makes metal skeleton text\n💍 Example : *.skeleton Ravindu*\n\n❄️Usage: *.xmas3d*\n✨Desc: it makes metal xmas3d text\n💍 Example : *.xmas3d Ravindu*\n\n❄️Usage: *.helloween*\n✨Desc: it makes metal helloween text\n💍 Example : *.helloween Ravindu*\n\n❄️Usage: *.neon1s*\n✨Desc: it makes metal neon1s text\n💍 Example : *.neon1s Ravindu*\n\n❄️Usage: *.new1y*\n✨Desc: it makes metal new1y text\n💍 Example : *.new1y Ravindu*\n\n❄️Usage: *.1fabric*\n✨Desc: it makes metal 1fabric text\n💍 Example : *.1fabric Ravindu*\n\n❄️Usage: *.purpule*\n✨Desc: it makes metal purpule text\n💍 Example : *.purpule Ravindu*\n\n❄️Usage: *.holo3d*\n✨Desc: it makes metal holo3d text\n💍 Example : *.holo3d Ravindu*\n\n❄️Usage: *.minion3d*\n✨Desc: it makes metal minion3d text\n💍 Example : *.minion3d Ravindu*\n\n❄️Usage: *.neongalaxy*\n✨Desc: it makes metal neongalaxy text\n💍 Example : *.neongalaxy Ravindu*\n\n❄️Usage: *.darkgold*\n✨Desc: it makes metal darkgold text\n💍 Example : *.darkgold Ravindu*\n\n❄️Usage: *.1sandwriting*\n✨Desc: it makes metal 1sandwriting text\n💍 Example : *.1sandwriting Ravindu*\n\n❄️Usage: *.cloudsky*\n✨Desc: it makes metal cloudsky text\n💍 Example : *.cloudsky Ravindu*\n\n❄️Usage: *.3dluxury*\n✨Desc: it makes metal 3dluxury text\n💍 Example : *.3dluxury Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text5', fromSew: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.sandsum*\n✨Desc: it makes metal sandsum text\n💍 Example : *.sandsum Ravindu*\n\n❄️Usage: *.1917*\n✨Desc: it makes metal 1917 text\n💍 Example : *.1917 Ravindu*\n\n❄️Usage: *.vtext*\n✨Desc: it makes metal vtext text\n💍 Example : *.vtext Ravindu*\n\n❄️Usage: *.ptext*\n✨Desc: it makes metal ptext text\n💍 Example : *.ptext Ravindu*\n\n❄️Usage: *.colortext*\n✨Desc: it makes metal colortext text\n💍 Example : *.colortext Ravindu*\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   
   QueenSew.newcmdaddtosew({pattern: 'text9', fromSew: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded by t.me/RavinduManoj*~_\n\n❄️Usage: *.shine*\n✨Desc: it makes metal shine text\n💍 Example : *.shine Ravindu*\n\n❄️Usage: *.chrome*\n✨Desc: it makes metal chrome text\n💍 Example : *.chrome Ravindu*\n\n❄️Usage: *.kueu*\n✨Desc: it makes metal kueu text\n💍 Example : *.kueu Ravindu*\n\n❄️Usage: *.2rainbow*\n✨Desc: it makes metal 2rainbow text\n💍 Example : *.2rainbow Ravindu*\n\n❄️Usage: *.metalic*\n✨Desc: it makes metal metalic text\n💍 Example : *.metalic Ravind*\n\n❄️Usage: *.melon*\n✨Desc: it makes melon stars text\n💍 Example : *.melon Ravindu*\n\n❄️Usage: *.underweb*\n✨Desc: it makes metal underweb text\n💍 Example : *.underweb Ravindu*\n\n❄️Usage: *.multi*\n✨Desc: it makes metal multi text\n💍 Example : *.multi Ravindu*\n\n❄️Usage: *.2coffe*\n✨Desc: it makes metal 2coffe text\n💍 Example : *.2coffe Ravindu*\n\n❄️Usage: *.2smoke*\n✨Desc: it makes metal 2smoke text\n💍 Example : *.2smoke Ravindu*\n\n❄️Usage: *.bevel*\n✨Desc: it makes metal bevel text\n💍 Example : *.bevel Ravindu*\n\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By Ravindu Manoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·')
   }));
   
   QueenSew.newcmdaddtosew({pattern: '18plus', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('   18+ list\n\n💠 .sespussy\n💠 .sesuni\n💠 .sestent\n💠 .sespanti\n💠 .sesmstrb\n💠 .sesmanga\n💠 .sesglass\n💠 .sescuck\n💠 .sesero\n💠 .sesbdsm\n💠 .sesass\n💠 .sessf')
   }));
   
   QueenSew.newcmdaddtosew({pattern: '18plus', fromSew: false}, (async (message, match) => {
      await message.sendMessage('එය භාවිත කල හැක්කෙ බොට්ගේ අයිතිකරුට පමණි')
   }));

}