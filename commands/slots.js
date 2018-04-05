const Discord = require("discord.js");
let iumics = require("../coins.json");
const fs = require("fs");

exports.run = async (bot, message, args) => {
  if (!coins[message.author.id]) {
    message.reply(`you have no coins to bet!`)
  }
  
  if(isNaN(args[0])) return message.reply("please supply a number! (`bet 100`)");
  
  let bet = parseInt(args[0]);
  let uCoins = coins[message.author.id].coins;
  let uBank = coins[message.author.id].bank;
  
  let slots = ["🍎", "🍐", "💎", "🥝", "🍇", "🍓", "🍅", "🍋", "🍌", "🍎", "🍐", "🥝", "🍇", "🍓", "🍅", "🍋", "🍌"]
  let a = Math.floor((Math.random() * slots.length));
  let b = Math.floor((Math.random() * slots.length));
  let c = Math.floor((Math.random() * slots.length));
  let d = Math.floor((Math.random() * slots.length));
  let e = Math.floor((Math.random() * slots.length));
  let f = Math.floor((Math.random() * slots.length));
  let g = Math.floor((Math.random() * slots.length));
  let h = Math.floor((Math.random() * slots.length));
  let i = Math.floor((Math.random() * slots.length));
  message.reply(`**[-- SLOTS --]**\n${a[slots]}${b[slots]}${c[slots]}\n${d[slots]}${e[slots]}${f[slots]}\n${g[slots]}${h[slots]}${i[slots]}\n**[-- SLOTS --]**`)
}

module.exports.help = {
  name: "slots"
}
