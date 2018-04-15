const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

    //let banEmbed = new Discord.RichEmbed()
    //.setDescription("~Ban~")
    //.setColor("#bc0000")
    //.addField("Banned User", `${bUser} with ID ${bUser.id}`)
    //.addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    //.addField("Banned In", message.channel)
    //.addField("Time", message.createdAt)
    //.addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Can't find logs channel.");

    message.guild.member(bUser).ban(bReason);
    //incidentchannel.send(`\🔨 USER BANNED \🔨\n\nBanned User: <@${bUser.id}>\n\nBanned By: <@${message.author.id}>\n\nBanned In: ${message.channel}\n\nReason: ${bReason}`);
    let banEmbed = new Discord.RichEmbed()
    .setTitle("🔨 USER BANNED 🔨")
    .setThumbnail("https://tse4.mm.bing.net/th?id=OIP.j3VvIndtHgqfynt9b8DwegHaHa&pid=15.1&P=0&w=300&h=300")
    .setColor("#2f3640")
    .setDescription(`**Banned User:** ${bUser}\n**Banned By:** <@${message.author.id}>\n**Banned In:** ${message.channel}\n**Reason:** ${bReason}`);
    
    incidentchannel.send(banEmbed)
    return;
}

module.exports.help = {
  name: "ban"
}
