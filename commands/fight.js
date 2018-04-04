const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  if (!xp[message.author.id]) {
   xp[message.author.id] = {
     xp: 0,
     level: 1
   };
 }
   
   if (xp[message.author.id].level < 5]) return message.reply(`you must be at level 5 to start fights!`)
   
   let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if (!tUser) return message.reply(`you need to tag a user to fight them. (\`fight @MyMom#1234\`)`)
   
 if (!xp[tUser.id]) {
   xp[tUser.id] = {
     xp: 0,
     level: 1
   };
 }
  
  if (!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 0
      bank: 200
    };
  }
  
  if (!coins[tUser.id]) {
    coins[tUser.id] = {
      coins: 0
      bank: 200
    };
  }
}

module.exports.help = {
  name: "fight"
}
