const Discord = require("discord.js");
let coins = require("../coins.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!tUser) {
    if(!coins[message.author.id]){
      coins[message.author.id] = {
        coins: 0
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

    return message.reply(`here are your stats:\n\n🏦 ${uCoins} coins.\n\n✨ Level: ${curlvl}\n\n💥 Experience: ${curxp}/${nxtLvlXp}\n\n\`You need ${difference} experience to level up!\``)
  }
  if(!coins[tUser.id]){
    coins[tUser.id] = {
      coins: 0
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

  return message.reply(`here are ${tUser}'s stats:\n\n🏦 ${plCoins} coins.\n\n✨ Level: ${curlvl}\n\n💥 Experience: ${curxp}/${nxtLvlXp}\n\n\`This user need ${difference} experience to level up!\``)
}

module.exports.help = {
  name: "me"
}
