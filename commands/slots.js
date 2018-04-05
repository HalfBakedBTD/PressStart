const Discord = require("discord.js");
let coins = require("../coins.json");
const fs = require("fs");

exports.run = async (bot, message, args) => {
  if (!coins[message.author.id]) {
    message.reply(`you have no coins to bet!`)
  }
  
  if(isNaN(args[0])) return message.reply("please supply a number! (`bet 100`)");
  
  let bet = parseInt(args[0]);
  let uCoins = coins[message.author.id].coins;
  let uBank = coins[message.author.id].bank;
  
  if (bet < 1) return(`You must enter a valid number!`)
  
  let slots = ["🍎", "🍐", "💎", "🥝", "🍇", "🍓", "🍅", "🍋", "🍌", "🍎", "🍐", "🥝", "🍇", "🍓", "🍅", "🍋", "🍌"]
  let aaa = Math.floor((Math.random() * slots.length));
  let bbb = Math.floor((Math.random() * slots.length));
  let ccc = Math.floor((Math.random() * slots.length));
  let ddd = Math.floor((Math.random() * slots.length));
  let eee = Math.floor((Math.random() * slots.length));
  let fff = Math.floor((Math.random() * slots.length));
  let ggg = Math.floor((Math.random() * slots.length));
  let hhh = Math.floor((Math.random() * slots.length));
  let iii = Math.floor((Math.random() * slots.length));
  message.channel.send(`**[-- SLOTS --]**\n${aaa[slots]}${bbb[slots]}${ccc[slots]}\n${ddd[slots]}${eee[slots]}${fff[slots]}\n${ggg[slots]}${hhh[slots]}${iii[slots]}\n**[-- SLOTS --]**`)
}

module.exports.help = {
  name: "slots"
}
