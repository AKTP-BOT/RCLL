const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🛸",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*⇆ 𝐇𝐢 𝐇𝐨𝐰 𝐚𝐫𝐞 𝐲𝐨𝐮😜 ⇆*

     *${pushname}*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐑𝐨𝐲𝐚𝐥 𝐂𝐫𝐞𝐚𝐭𝐢𝐤𝐧 𝐋𝐤 𝐏𝐚𝐧𝐧𝐞𝐥 📌
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𝐀𝐯𝐢𝐬𝐡𝐤𝐚_𝐗-𝐌𝐃👨🏻‍💻*

*┌─〈 ${config.BOT_NAME} 〉─◆*
*│╭─────────────···▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖𝐑𝐂𝐋_𝐌𝐃*
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *➺Ak_X࿐*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ1*
*❖│▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*│╰────────────···▸▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*

*╭────❒⁠⁠⁠⁠* *𝐀𝐥𝐥 𝐃𝐞𝐚𝐭𝐚𝐢𝐥𝐬 𝐩𝐚𝐧𝐧𝐞𝐥* *❒⁠⁠⁠⁠* 
*┋* *.𝐂𝐨𝐧𝐭𝐚𝐜𝐭𝐬* ☎️
*┋* *.𝐌𝐨𝐝𝐬* 📕
*┋* *.𝐏𝐫𝐢𝐳𝐞* 💲
*┋* *.𝐎𝐰𝐧𝐞𝐫* 🤵
*┋* *.𝐒𝐮𝐩𝐩𝐨𝐫𝐭* ✅
*┋* *.𝐂𝐫𝐞𝐚𝐭𝐨𝐫* 👨‍💻
*┕───────────────────❒*

>*𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐑𝐂𝐋*
╘✦•·········•••••••••············•✦ 
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
