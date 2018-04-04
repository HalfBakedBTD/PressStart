const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.reply(`here are my commands:\n\n📄 **help** - shows help message.\n🗃 **sinfo** - gives you server info.\n🤖 **binfo** - gives you bot info.\n\n🔨 **ban** - bans a user in the server.\n👢 **kick** - kicks a user easily.\n🤐 **mute** - mutes a member disabling chatting.\n⚠ **warn** - warns a user. (More warnings = more punishments such as mute)\n🕯 **clear** - deletes a certain amount of messages.\n\n💬 **say** - make me say something.\n🐶 **woof** - make me bring up a random dog image.\n🐱 **meow** - make me send a random cat image.`)
}

module.exports.help = {
  name: "help"
}
