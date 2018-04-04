const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  if (!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 0,
      bank: 200
    };
  }
  
  if(isNaN(args[0])) return message.reply("please supply a number! (`withdraw 10`)");
  
  let uCoins = coins[message.author.id].coins;
  let uBank = coins[message.author.id].bank;
  
  if (parseInt(args[0]) > uBank) return message.reply(`you don't ${parseInt(args[1])} coins to withdraw!`)
  if (parseInt(args[0]) < 1) return message.reply(`you have to withdraw more than 1 coins at a time.`)
  
  coins[message.author.id] = {
    coins: uCoins + parseInt(args[0]),
    bank: uBank - parseInt(args[0])
  };  
  message.reply(`you have withdrawn ${parseInt(args[0])} coins!`)
}
  
module.exports.help = {
  name: "withdraw"
}
