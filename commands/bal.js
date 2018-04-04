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

    return message.channel.send(`🏦 <@${message.author.id}> you have ${uCoins} coins. 🏦`)
  }
  if(!coins[cUser]){
    coins[cUser] = {
      coins: 0
    }
  }

  let plCoins = coins[cUser.id].coins;

  return message.channel.send(`🏦 **${cUser}** has ${plCoins} coins. 🏦`)
}

module.exports.help = {
  name: "bal"
}
