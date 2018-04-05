const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  if (!coins[message.author.id]) {
    message.reply(`you have no coins to deposit!`)
  }
  
  if(isNaN(args[0])) return message.reply("please supply a number! (`dep 10`)");
  
  let uCoins = coins[message.author.id].coins;
  let uBank = coins[message.author.id].bank;
  
  if (parseInt(args[0]) > uCoins) return message.reply(`you don't ${parseInt(args[0])} coins to deposit`)
  if (parseInt(args[0]) < 100) return message.reply(`you have to deposit more than 100 coins at a time.`)
  
  coins[message.author.id] = {
    coins: uCoins - parseInt(args[0]),
    bank: uBank + parseInt(args[0])
  };  
  message.reply(`you have deposited ${parseInt(args[0])} coins!`)
}
  
module.exports.help = {
  name: "dep"
}
