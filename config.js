global.owner = ['12025392771'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

// Sticker WM
global.packname = '🔥Phia�🥀🥀\n❏ ᴇɪɴᴇs ᴋʟᴇɪɴᴇʀ ᴠᴏɴ ᴅɪsᴄʟᴀɪᴍᴇʀ...\n❏ ɪs ᴛʜᴇ sᴏʟᴜᴛɪᴏɴ\n⚠️Phia⚠️ '
global.author = '➬🌤️🏆diegottinphia🏆🌤️\n↳  🔥Phia�🥀🥀\n\n\n\n\n      🌺ᵇaͤnͨdͬcͤrͣeͭaͥtͮeͤ🌺\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
