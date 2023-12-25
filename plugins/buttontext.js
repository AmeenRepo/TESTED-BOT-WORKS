      case 'Song':
              moon1 = await moon.prepareMessage(from, AMEEN, location, {thumbnail: AMEEN})
              moon2 = moon1.message["ephemeralMessage"] ? moon1.message.ephemeralMessage : moon1
              groups = moon.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = moon.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await moon.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `
*I ᴀᴍ Sᴛɪʟʟ Aʟɪᴠᴇ Bʀᴏ :)*
*Sᴘᴇᴇᴅ :* ${latensie.toFixed(4)} Second
*Rᴀᴍ Usᴀɢᴇ :* ${ram2}
*Bᴀᴛᴛᴇʀʏ :* ${baterai}% ${charger}
*Pʟᴀᴛғᴏʀᴍ :* ${os.platform()}
*Uᴘᴛɪᴍᴇ :* ${runtime(process.uptime())}
*Wᴀ ᴠᴇʀsɪᴏɴ :* ${moon.user.phone.wa_version}
*Os ᴠᴇʀsɪᴏɴ :* ${moon.user.phone.os_version}
*Dᴇᴠɪᴄᴇ Mᴀɴᴜғᴀᴄᴛᴜʀᴇ :* ${moon.user.phone.device_manufacturer}
*Dᴇᴠɪᴄᴇ Mᴏᴅᴇʟ :* ${moon.user.phone.device_model}
`
    menubutton = [{buttonId:`${prefix}ping`,buttonText:{displayText:'CREDITS'},type:1}
]
 menumessage = { contentText: `${teks}`, footerText: `Sᴜʙsᴄʀɪʙᴇ Yᴛ Ds Mᴏᴅs`, buttons: menubutton, headerType: 6, locationMessage: moon2.message.locationMessage}
 moon.sendMessage(from, menumessage, MessageType.buttonsMessage)
             break  