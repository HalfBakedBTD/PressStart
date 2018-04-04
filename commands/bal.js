const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  let cUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!cUser) {
    if(!coins[message.author.id]){
      coins[message.author.id] = {
        coins: 0
      };
    }

    let uCoins = coins[message.author.id].coins;
    let uBank = coins[message.author.id].bank;

    return message.reply(`you have:\n\n💰 Coins: ${uCoins}\n\n🏦 Bank: ${uBank}`)
  }
  if(!coins[cUser.id]){
    coins[cUser.id] = {
      coins: 0
    }
  }

  let plCoins = coins[cUser.id].coins;
  let plBank = coins[cUser.id].bank;

  return message.reply(`**${cUser}** has:\n\n💰 Coins: ${plCoins}\n\n🏦 Bank: ${plBank}`)
}

module.exports.help = {
  name: "bal"
}
