const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(cmd === `${prefix}warn`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);
    if (!rreason) return message.channel.send(`Please supply a reason.`)

    //let reportEmbed = new Discord.RichEmbed()
    //.setDescription("Reports")
    //.setColor("#15f153")
    //.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    //.addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    //.addField("Channel", message.channel)
    //.addField("Time", message.createdAt)
    //.addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "logs");
    if(!reportschannel) return message.channel.send("Couldn't find logs channel.");


    message.delete().catch(O_o=>{});
    rUser.send(`You were warned in ${message.guild.name} by ${message.author.username} for ${rreason}.`)
    reportschannel.send(`⚠ WARNING ⚠\n\nWarned: <@${rUser.id}>\n\nWarned By: <@${message.author.id}>\n\nWarned In: ${message.channel}\n\nReason: ${rreason}`);

    return;
}
 
module.exports.help = {
  name: "warn"
}
