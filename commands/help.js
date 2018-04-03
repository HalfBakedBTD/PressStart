const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.channel.send("My Commands: `help`, `ban`, `kick`, `mute`, `warn`, `addrole`, `removerole`, `sinfo`, `binfo`, `woof`, and `meow`.")
}

module.exports.help = {
  name: "help"
}
