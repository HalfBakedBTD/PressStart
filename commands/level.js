const Discord = require("discord.js");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  
  let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!tUser) {

    if(!xp[message.author.id]){
     xp[message.author.id] = {
       xp: 0,
       level: 1
    };
  }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvlXp = curlvl * 50;
    let difference = nxtLvlXp - curxp;

    //let lvlEmbed = new Discord.RichEmbed()
    //.setAuthor(message.author.username)
    //.setColor(purple)
    //.addField("Level", curlvl, true)
    //.addField("XP", curxp, true)
    //.setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);

    return message.reply(`here are your level stats:\n\n✨ Level: ${curlvl}\n\n💥 Experience: ${curxp}/${nxtLvlXp}\n\n\`You need ${difference} experience to level up!\``)
  }
  if(!xp[tUser.id]){
     xp[tUser.id] = {
       xp: 0,
       level: 1
    };
  }
    let curxp = xp[tUser.id].xp;
    let curlvl = xp[tUser.id].level;
    let nxtLvlXp = curlvl * 50;
    let difference = nxtLvlXp - curxp;

    //let lvlEmbed = new Discord.RichEmbed()
    //.setAuthor(message.author.username)
    //.setColor(purple)
    //.addField("Level", curlvl, true)
    //.addField("XP", curxp, true)
    //.setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);

    return message.reply(`here are <@${tUser.id}>'s level stats:\n\n✨ Level: ${curlvl}\n\n💥 Experience: ${curxp}/${nxtLvlXp}\n\n\`${tUser} needs ${difference} experience to level up!\``)


}

module.exports.help = {
  name: "level"
}
