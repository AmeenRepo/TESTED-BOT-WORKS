
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
 ❖ *DONATE*  ❖
If you get more info of 🤍 DURGA MD 🤍 Contact 916238768108`
let img = 'https://telegra.ph/file/7d84f663bc6e7fdac5c66.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donate', 'give'] 

export default handler
