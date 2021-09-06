/*
const QueenSew = require("../events");
const { MessageType } = require("@adiwajshing/baileys");
const { UploadToImgur } = require("../Utilis/Misc");

QueenSew.newcmdaddtosew({ pattern: "url", fromMe: true, desc: "Image to url." },async (message, match) => {
 if (!message.reply_message ||
      (!message.reply_message.image && !message.reply_message.video)
    )
      return await message.sendMessage("*Reply to a video or image.*");
    if (message.reply_message.length > 10)
      return await message.sendMessage("*Only accept below 10 MB*");
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "url"
    );
    let url = await UploadToImgur(location);
    return await message.sendMessage(url, { quoted: message.data });
  }
);
*/
