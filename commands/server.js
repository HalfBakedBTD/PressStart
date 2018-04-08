const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //let sicon = message.guild.iconURL;
    //let serverembed = new Discord.RichEmbed()
    //.setDescription("Server Information")
    //.setColor("#15f153")
    //.setThumbnail(sicon)
    //.addField("Server Name", message.guild.name)
    //.addField("Created On", message.guild.createdAt)
    //.addField("You Joined", message.member.joinedAt)
    //.addField("Total Members", message.guild.memberCount);

    message.reply(`here is the server information \n\n📟 Server Name: ${message.guild.name}\n\n👑 Owner: ${message.guild.owner}\n\n💳 Owner ID: ${message.guild.ownerID}\n\n🌐 Region: ${message.guild.region}\n\n🚦 Verification Level: ${message.guild.verificationLevel}\n\nTotal Members: ${message.guild.memberCount}`);
}

module.exports.help = {
  name: "server"
}
