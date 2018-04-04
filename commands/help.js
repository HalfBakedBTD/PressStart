const Discord = require("discord.js");
let prefixes = require("../prefixes.json");

exports.run = async (bot, message, args) => {
  let prefix = prefixes[message.guild.id].prefixes;
  message.reply(`here are my commands:\n\n📄 **${prefix}help** - shows help message.`)
}

module.exports.help = {
  name: "help"
}
