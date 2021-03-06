const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var text_channels = 0, voice_channels = 0;
    bot.channels.array().forEach(channel => {
      if (channel.type == 'text') {
        text_channels += 1;
      } else if (channel.type == 'voice') {
        voice_channels += 1;
      }
    });
    
    let botAvatar = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setColor('#27ae60')
    .setThumbnail(botAvatar)
    .addField("Name:", `${bot.user.username}`, true)
    .addField("Guilds:", `${bot.guilds.size}`, true)
    .addField("Users:", `${bot.users.size}`, true)
    .addField("Text Channels:", `${text_channels}`, true)
    .addField("Voice Channels:", `${voice_channels}`, true)
    .addField("Created By:", `<@284137818895417344>`, true)
    .addField("Language:", `discord.js`, true)
    .addField("Memory:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB"}`, true)
    .addField("Birth:", `${bot.user.createdAt}`, true)
    .addField("Helps:", "[Website](https://jasondw242.wixsite.com/rambunctious) | [Discord](https://discord.gg/REkAA2X) | [Donate](https://jasondw242.wixsite.com/rambunctious/donate)");
    
    message.channel.send(botEmbed)

    //message.reply(`here is my information:\n\n🤖 Name: ${bot.user.username}\n\n🕥 Created On: ${bot.user.createdAt}\n\n🌲 Online Users: ${bot.users.size}\n\n#⃣ Text Channels: ${text_channels}\n\n🔈 Voice Channels: ${voice_channels}\n\n🇯 Made With: discord.js\n\n🌙 Made By: HalfBakedGaming#6768 with ID: 346687165868015616\n\n🌐 Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB"}`);
}
  
module.exports.help = {
  name: "info"
}
