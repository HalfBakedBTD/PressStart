const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  let cUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!cUser) {
    if(!coins[message.author.id]){
      coins[message.author.id] = {
        coins: 0,
        bank: 200
      };
    }

    let uCoins = coins[message.author.id].coins;
    let uBank = coins[message.author.id].bank;
    let uNet = uBank + uCoins;

    return message.reply(`you have:\n\n💰 Coins: ${uCoins}\n\n🏦 Bank: ${uBank}\n\n⛹ Net Worth: ${uNet}`)
  }
  if(!coins[cUser.id]){
    coins[cUser.id] = {
      coins: 0,
      bank: 200
    }
  }

  let plCoins = coins[cUser.id].coins;
  let plBank = coins[cUser.id].bank;
  let plNet = plBank + plCoins;

  return message.reply(`**${cUser}** has:\n\n💰 Coins: ${plCoins}\n\n🏦 Bank: ${plBank}\n\n⛹ Net Worth: ${plNet}`)
}

module.exports.help = {
  name: "bal"
}
