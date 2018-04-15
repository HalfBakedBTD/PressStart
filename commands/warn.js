const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal! You don't have the perms!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them!");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl to warn!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("⚠ WARNING ⚠")
  .setThumbnail("https://tse2.mm.bing.net/th?id=OIP.IJMhXskD06HXmBugmkU_tQHaEE&pid=Api")
  .setDescription(`**Warned User:** <@${wUser.id}>\n**Warned By:** <@${message.author.id}>\n**Warned In:** ${message.channel}\n**Reason:** ${reason}\n**User Warn Level:** ${warns[wUser.id].warns}`)
  .setColor("#f5f6fa")

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Couldn't find logs channel!");

  //warnchannel.send(`⚠ WARNING ⚠\n\nWarned User: <@${wUser.id}>\n\nWarned By: <@${message.author.id}>\n\nWarned In: ${message.channel}\n\nWarns for ${wUser}: ${warns[wUser.id].warns}\n\nReason: ${reason}`);

  warnchannel.send(warnEmbed)
  
  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "30m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted!`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 4){
    message.guild.member(wUser).kick(reason);
    message.reply(`<@${wUser.id}> has been kicked.`)
  }
  if(warns[wUser.id].warns == 6){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned.`)
  }

}

module.exports.help = {
  name: "warn"
}
