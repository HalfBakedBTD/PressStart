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

    message.channel.send(`🤖Bot Information🤖\n\nName: ${bot.user.username}\n\nCreated On: ${bot.user.createdAt}\n\nOnline Users: ${bot.users.size}\n\nText Channels: ${text_channels}\n\nVoice Channels: ${voice_channels}\n\nMade With: discord.js\n\nMade By: HalfBakedGaming#6768 with ID: 346687165868015616\n\nMemory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB"}`);
}
  
module.exports.help = {
  name: "binfo"
}
