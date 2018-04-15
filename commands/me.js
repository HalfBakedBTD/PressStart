const Discord = require("discord.js");
let coins = require("../coins.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!tUser) {
    if(!coins[message.author.id]){
      coins[message.author.id] = {
        coins: 0,
        bank: 200
      };
    }
    
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
    let uCoins = coins[message.author.id].coins;
    let uBank = coins[message.author.id].bank;
    let uNet = (uBank + uCoins) * xp[message.author.id].level;

    //return message.reply(`here are your stats:\n\n✨ Level: ${curlvl}\n💥 Experience: ${curxp}/${nxtLvlXp}\n\n💰 Coins: ${uCoins}\n🏦 Bank: ${uBank}\n\n\`You need ${difference} experience to level up!\``)
    let meEmbed = new Discord.RichEmbed()
    .setTitle(`📔 ${message.author.username} 📔`)
    .setThumbnail((message.author.displayAvatarURL))
    .setColor("#ff9f1a")
    .addField("Level:", `${curlvl}`)
    .addField("Experience:", `${curxp}/${nxtLvlXp}`)
    .addField("Coins:", `${uCoins}`)
    .addField("Bank:", `${uBank}`)
    .addField("Net Worth:", `${uNet}`)
    .setFooter(`<@${message.author.id}>, you need ${difference}XP to level up.`, message.author.displayAvatarURL);
    
    return message.channel.send(meEmbed)
  }
  if(!coins[tUser.id]){
    coins[tUser.id] = {
      coins: 0,
      bank: 200
    }
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

  let plCoins = coins[tUser.id].coins;
  let plBank = coins[tUser.id].bank;
  let plNet = (uBank + uCoins) * xp[tUser.id].level;

  //return message.reply(`here are ${tUser}'s stats:\n\n✨ Level: ${curlvl}\n💥 Experience: ${curxp}/${nxtLvlXp}\n\n💰 Coins: ${plCoins}\n🏦 Bank: ${plBank}\n\n\`This user need ${difference} experience to level up!\``)
    let meEmbed = new Discord.RichEmbed()
    .setTitle(`📔 ${tUser} 📔`)
    .setThumbnail((tUser.displayAvatarURL))
    .setColor("#ff9f1a")
    .addField("Level:", `${curlvl}`)
    .addField("Experience:", `${curxp}/${nxtLvlXp}`)
    .addField("Coins:", `${plCoins}`)
    .addField("Bank:", `${plBank}`)
    .addField("Net Worth:", `${plNet}`)
    .setFooter(`${tUser} needs ${difference}XP to level up.`, message.author.displayAvatarURL);
    
    return message.channel.send(meEmbed)
}

module.exports.help = {
  name: "me"
}
