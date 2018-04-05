const Discord = require("discord.js");
let coins = require("../coins.json");
const fs = require("fs");

exports.run = async (bot, message, args) => {
  if (!coins[message.author.id]) {
    message.reply(`you have no coins to bet!`)
  }
  
  if(isNaN(args[0])) return message.reply("please supply a number! (`slots 100`)");
  
  let bet = parseInt(args[0]);
  let uCoins = coins[message.author.id].coins;
  let uBank = coins[message.author.id].bank;
  
  if (bet < 1) return(`You must enter a valid number!`)
  
  let slots = ["🍎", "🍐", "💎", "🥝", "🍇", "🍓", "🍅", "🍋", "🍌", "🍎", "🍐", "🥝", "🍇", "🍓", "🍅", "🍋", "🍌"]
  let choice = Math.floor((Math.random() * slots.length));
  let choiceTwo = Math.floor((Math.random() * slots.length));
  let choiceThree = Math.floor((Math.random() * slots.length));
  let choiceFour = Math.floor((Math.random() * slots.length));
  let choiceFive = Math.floor((Math.random() * slots.length));
  let choiceSix = Math.floor((Math.random() * slots.length));
  let choiceSeven = Math.floor((Math.random() * slots.length));
  let choiceEight = Math.floor((Math.random() * slots.length));
  let choiceNine = Math.floor((Math.random() * slots.length));
  message.channel.send(`**[- SLOTS -]**\n${slots[choice]}${slots[choiceTwo]}${slots[choiceThree]}\n${slots[choiceFour]}${slots[choiceFive]}${slots[choiceSix]}\n${slots[choiceSeven]}${slots[choiceEight]}${slots[choiceNine]}\n**[- SLOTS -]**`)
  
}

module.exports.help = {
  name: "slots"
}
