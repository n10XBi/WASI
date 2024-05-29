//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923135673658,923192173398";
global.owner = process.env.OWNER_NUMBER || "923135673658";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUhMNGdSTkxEVUhRVmhsaHBySUxoZThtdVJDSFZmaHFCZWptZmorQVowUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWNiWDFvczBIdXFOeVZFSHBoSFAyaG9LdjArcnBncWVLS2FNRzZDZjNnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQzZBRTZFdnduQkRKQmRYb3hSL05uMkZ6Vkd3a1FtdnNGZjFHRFE1UzI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4WjJNY1NmdTlKbTArbW95ZThyMklPM2tFM2h1aUdhMDFzaFYzajdja0hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOUS9qaktuUmwvYXExM1pKUTJSaGN4a3ZkRTUybk91ZE53RlF5MnlHbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZTcEk2NnkwM0NMeWcyRUUzQWc4U000YUh2b1Bydm5ZbHQ5UXF1My82amc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU4weCtBYit2YWpEbnMrYjFFRzNBSFRjand5cUhROVpta2M5NkQ4VnlWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTk1CUUNiOStlZFViZzMzUzZ2d0hORkdqZjV5RzNPbGVYeVAveXZOUTltMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdSZVpvS3NsMlFRRTBQTW5yNVFUYVdXcm5yeXhBa2RsOVcyUHA3M1lvcnRNU1VJVk1qbUU5R1cydmxrN0FKV1lxSzdFeUthd0VCeW1DenFlbGovb0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiJNRklQSzRQNXp5ZEJGdlRjY3lXS3ZFZDd3eEgvL1R6ek56ckdobHQ0ZlNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYyODg5NzM2ODY1MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDc3Q0M4ODcyNkJEOURCMTQ1NTYyOUIyMjBFMjNFMUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNjk5MjY2Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNjI4ODk3MzY4NjUzN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzRDM0RTFDRDM2QTg4MDcyREE3REFEQ0ZBNDAwMjUzNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE2OTkyNjY2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwVnpwbEVsQVJ4dXZ0Vy1EbGFHaF9RIiwicGhvbmVJZCI6IjBhOTkwYjI1LWM3ZTktNGY1MS04NmEyLTNjZWYwNWRmZGMzYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwVVk2UmR6NjVONVl5Q280UHRjQzVpL3B0K2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2lKS0VmSUZKUE5LMzA3Y1NaYTRFVG4yQkhrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJKMzMxOThLIiwibWUiOnsiaWQiOiI2Mjg4OTczNjg2NTM3OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYWlkZW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05yT3F0d0dFSXIxM0xJR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imx2VEgzQ1JtT04vbStXdVVaeEtRK1k2RkVONDlHRWtsSGc5d3ZpVzg4a2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitVMTFKYWVWbUJiVkFwYlRxYnZoVFl5dFNZZDF4YW9Ybnk3MFVHd1k4NlJEeS83NktCOHNGRzExcmhpSk9aZllUY0xkdnloSG5XcjFBQW5GTW5kS0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaRnhOSmYxK3d5NStZREhKeFk1RUNFK0l2Q0lXeUNJSFlzd2xoWWlHUTVJWXh6bktacEJIQ1dQdWR6U04xYUQ0anNwYkdOTytBa2J3RXhBdG1jY0ZDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODg5NzM2ODY1Mzc6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaYjB4OXdrWmpqZjV2bHJsR2NTa1BtT2hSRGVQUmhKSlI0UGNMNGx2UEpJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE2OTkyNjYzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1sUiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
