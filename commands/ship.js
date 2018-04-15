const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
  let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  
  let dieAmt = Math.floor(Math.random() * 99) + 1;
  
  if (dieAmt > 50) return
}

module.exports.help = {
  name: "ship"
}
