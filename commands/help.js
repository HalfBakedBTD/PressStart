const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  //message.reply(`here are my commands:\n\n📄 **help** - shows help message.\n❗ **prefix** - lets you make a custom server prefix.\n🗃 **server** - gives you server info.\n🤖 **info** - gives you bot info.\n\n🔨 **ban** - bans a user in the server.\n👢 **kick** - kicks a user easily.\n🤐 **mute** - mutes a member disabling chatting.\n🖌 **cmr** - Creates a muted role so that when **warn** is used twice for one member, the member gets muted.\n⚠ **warn** - warns a user. (More warnings = more punishments such as mute)\n🕯 **clear** - deletes a certain amount of messages.\n\n💬 **say** - make me say something.\n🐶 **woof** - make me bring up a random dog image.\n🐱 **meow** - make me send a random cat image.\n\n🏦 **bal** - shows you how many coins you have.\n🏬 **dep** - allows you to deposit money into your bank for safe keeping.\n☑ **withdraw** - lets you withdraw money from the bank.\n🥊 **fight** - lets you fight another user.\n🤝 **give** - lets you give users cash.\n✨ **level** - displays your level stats.\n\n📬 **invite** - sends you a link to add me to your server.\n🌐 **discord** - links you to my server.`)
  //message.reply("\n💻 My Website: https://jasondw242.wixsite.com/rambunctious\n\n🏝 My server: https://discord.gg/REkAA2X\n\n⚙See my commands list at: https://jasondw242.wixsite.com/rambunctious/commands\n\n`WARNING` due to the sign up feature on the webpage some browsers have interperated it as a webpage to steal personal info. This is just a browser precaution so feel free to ignore it.");
    let botEmbed = new Discord.RichEmbed()
    .setColor('#fff200')
    .addField("Links:", "[Website](https://jasondw242.wixsite.com/rambunctious) | [Discord](https://discord.gg/REkAA2X) | [Commands](https://jasondw242.wixsite.com/rambunctious/commands)");
    message.channel.send(botEmbed);
}

module.exports.help = {
  name: "help"
}
