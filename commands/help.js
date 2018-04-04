const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.reply(`here are my commands:\n\n📄 **help** - shows help message.\n🗃 **sinfo** - gives you server info.\n🤖 **binfo** - gives you bot info.\n\n🔨 **ban** - bans a user in the server.`)
}

module.exports.help = {
  name: "help"
}
