const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var text_channels = 0, voice_channels = 0;
    message.guild.channels.filter(c => c.id !== "Frog Turd").forEach(channel => {
      if (channel.type == 'text') {
        text_channels += 1;
      } else if (channel.type == 'voice') {
        voice_channels += 1;
      }
    });
    
    //message.reply(`here is the server information \n\n📟 Server Name: ${message.guild.name}\n\n👑 Owner: ${message.guild.owner}\n\n💳 Owner ID: ${message.guild.ownerID}\n\n🌐 Region: ${message.guild.region}\n\n🚦 Verification Level: ${message.guild.verificationLevel}\n\nTotal Members: ${message.guild.memberCount}`);
    message.guild.fetchBans()
      .then(bans => {
        let guildAvatar = message.guild.iconURL;
        let guildEmbed = new Discord.RichEmbed()
        .setTitle("Server Information.")
        .setColor('#27ae60')
        .setThumbnail(guildAvatar)
        .addField("Name:", `${message.guild.name}`, true)
        .addField("Owner:", `${message.guild.owner}`, true)
        .addField("Owner ID:", `${message.guild.ownerID}`, true)
        .addField("Text Channels:", `${text_channels}`, true)
        .addField("Voice Channels:", `${voice_channels}`, true)
        .addField("Region:", `${message.guild.region}`, true)
        .addField("Verification Level:", `${message.guild.verificationLevel}`, true)
        .addField("Members:", `${message.guild.memberCount}`, true)
        .addField("Bans Size:", `${bans.size}`, true)
    
    message.channel.send(guildEmbed)

    .catch(console.error);
  });
}

module.exports.help = {
  name: "server"
}
