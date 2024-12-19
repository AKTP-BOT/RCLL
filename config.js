const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/Mhd1RQX/941843c8dbcf7ac8.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "┏━━━━━━━━━━━➤◍◉➤\𝐧📌├ *𝐇𝐞𝐲 𝐈'𝐦 𝐑𝐨𝐲𝐚𝐥 𝐂𝐫𝐞𝐚𝐭𝐢𝐨𝐧 𝐋𝐤* 🧪 *𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n├ *🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰* ❤️\n\n├ *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝐑𝐂𝐋*\𝐧\𝐧├🧬 *𝐒𝐞𝐞 𝐚𝐥𝐥 𝐝𝐞𝐭𝐚𝐢𝐥𝐬 > .𝐦𝐞𝐧𝐮* 🔊\𝐧┗━━━━━━━━━━━━━━━━━➤◍◉➤",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
