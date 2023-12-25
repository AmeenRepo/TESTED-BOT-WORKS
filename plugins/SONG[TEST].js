const { Function, getBuffer } = require('../lib/')
const { generateWAMessage, proto } = require('@adiwajshing/baileys');
const image = 'https://i.imgur.com/vJi4ojO.jpeg' //MAIN IMAGE URL HERE
const logo = 'https://i.imgur.com/KbTjvfZ.jpeg'
const audio = 'https://i.imgur.com/OwQ1yZn.mp4'

Function(
	{
		pattern: 'song ?(.*)',
		fromMe: true,
		desc: 'ʟᴏᴠᴇ yᴏᴜ ɢᴜyꜱ💝ᴄʀᴇᴀᴛᴇᴅ ʙy ᴀᴍᴇᴇɴ-ꜱᴇʀ',
		type: 'misc',
	},   async (message, match) => {
        const jid = message.jid
        const number = message.client.user.jid
        const thumb = await getBuffer(image)
        const thumbnail = await getBuffer(logo)
        const voice = await getBuffer(audio)
        const options = {}
	options.contextInfo = {
		forwardingScore: 999, // change it to 999 for many times forwarded
		isForwarded: false,
	}
        // ADDED /* TO REMOVE LINK PREVIEW TYPE
        options.linkPreview = {
               renderLargerThumbnail: true,
               showAdAttribution: true,
               title: "💙𝚳𝚯𝚴𝐊-𝚳𝐃💚",
               body: "ᴄʀᴇᴀᴛᴇᴅ ʙy Ⱥmɇɇn-Sɇɍ",
               mediaType: 1,
               thumbnail: thumb,
               sourceUrl: "https://chat.whatsapp.com/E82ESBrsgHJBkQW6VOOLjh"
             }
        // ADDED */ TO REMOVE LINK PREVIEW TYPE
        options.quoted = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast"
            },
            message: {
                "orderMessage": {
        	"itemCount" : 555555,
                "status": 1,
                "surface" : 1,
                "message":"" 
                }
            },

        }

let messages = await generateWAMessage(message.jid, { text: `ᥬ😇᭄ 💚𝝯𝞘𝞑𝞢 𝞛𝙐𝙎𝞘𝘾 𝞑𝞗𝙏🤍

01:43 ━━━━●───── 03:50
⇆ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻﻿
        💙ılıılıılıılıılıılı💜
ᴠᴏʟᴜᴍᴇ : ▮▮▮▮▮▮▮▮▮▮

• *_ʟᴏꜰɪ_*
• *_ᴩʜᴏɴᴋ_*
• *_x ʀᴇᴍɪx_*
• *_ᴍᴀꜱʜᴜᴩ_*
• *_ᴅᴇᴅɪᴄᴀᴛᴇ yᴏᴜʀ ꜰᴀᴠ ꜱᴏɴɢ_*
• *_ᴇᴛᴄ.. ᴀʀᴇ ᴀᴠᴀɪʟᴀʙʟᴇ_*

ᴄʀᴇᴀᴛᴇᴅ ʙy ᴀᴍᴇᴇɴ🪄`}, {quoted: message.quoted || ''})

await message.client.forwardMessage(message.jid, await proto.WebMessageInfo.fromObject(messages), options)

    }
);