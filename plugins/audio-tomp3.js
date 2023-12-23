import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `mentioned me a video or document for convert to mp3,with the command :\n\n*${usedPrefix + command}*`*/
    let media = await q.download?.()
    if (!media) throw 'FAILED MY SERVER'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'ERROR MY SERVER'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = /^to(mp3|a(udio)?)$/i

export default handler
