const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botAvatar = bot.user.displayAvatarURL;
    var text_channels = 0, voice_channels = 0;
    bot.channels.array().forEach(channel => {
      if (channel.type == 'text') {
        text_channels += 1;
      } else if (channel.type == 'voice') {
        voice_channels += 1;
      }
    });

    message.reply(`here is my information:\n\n🤖 Name: ${bot.user.username}\n\n🕥 Created On: ${bot.user.createdAt}\n\n🌲 Online Users: ${bot.users.size}\n\n#⃣ Text Channels: ${text_channels}\n\n🔈 Voice Channels: ${voice_channels}\n\n🇯 Made With: discord.js\n\n🌙 Made By: HalfBakedGaming#6768 with ID: 346687165868015616\n\n🌐 Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB"}`);
}
  
module.exports.help = {
  name: "binfo"
}
