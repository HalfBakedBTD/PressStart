const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
let claims = require("../claims.json")

module.exports.run = async (bot, message, args) => {
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0,
      bank: 200
    };
  }
  if(!claims[message.author.id]) {
    claims[message.author.id] = {
      claims: 0
    };
  }
  
  let uClaims = claims[message.author.id].claims + 1;
  let uCoins = coins[message.author.id].coins;
  let uBank = coins[message.author.id].bank;
  let prize = uClaims * 50;
  
  claims[message.author.id] = {
    claims: uClaims
  }
  coins[message.author.id] = {
    coins: uCoins + prize,
    bank: uBank
  }
  
  message.reply(`you have claimed ${prize} coins!\n\nStreak: ${uClaims}\n${"☑" * uClaims}`)
}

module.exports.help = {
  name: "claim"
}
