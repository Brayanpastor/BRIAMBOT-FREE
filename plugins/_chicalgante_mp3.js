let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/chica lgante.mp3', '', 'xd', m)
}
handler.command = /^(chicalgante)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
