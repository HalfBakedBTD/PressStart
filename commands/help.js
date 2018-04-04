const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.reply(`here are my commands:\n\n📄 **help** - shows help message.`)
}

module.exports.help = {
  name: "help"
}
