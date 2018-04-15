const Discord = require("discord.js");
let coins = require("../coins.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  let cUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!cUser) {
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

    let uCoins = coins[message.author.id].coins;
    let uBank = coins[message.author.id].bank;
    let uNet = (uBank + uCoins) * xp[message.author.id].level;

    //return message.reply(`you have:\n\n💰 Coins: ${uCoins}\n\n🏦 Bank: ${uBank}\n\n⛹ Net Worth: ${uNet}`)
    let balEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setDescription(`<@${message.author.id}>, you have **${uCoins}** coins on hand and **${uBank}** coins in the bank.\nYour net worth is **$${uNet}**.`)
    
    return message.channel.send(balEmbed)
  }
  if(!coins[cUser.id]){
    coins[cUser.id] = {
      coins: 0,
      bank: 200
    }
  }
  if(!xp[cUser.id]){
     xp[cUser.id] = {
       xp: 0,
       level: 1
    };
  }

  let plCoins = coins[cUser.id].coins;
  let plBank = coins[cUser.id].bank;
  let plNet = (plBank + plCoins) * xp[cUser.id].level;

  //return message.reply(`**${cUser}** has:\n\n💰 Coins: ${plCoins}\n\n🏦 Bank: ${plBank}\n\n⛹ Net Worth: ${plNet}`)
    let balEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setDescription(`${cUser} has **${plCoins}** coins on hand and **${plBank}** coins in the bank.\nTheir net worth is **$${plNet}**.`)
    
    return message.channel.send(balEmbed)
}

module.exports.help = {
  name: "bal"
}
