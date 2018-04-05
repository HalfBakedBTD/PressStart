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
   
   if (xp[message.author.id].level < 5) return message.reply(`you must be at level 5 to start fights!`)
   
   
   let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if (!tUser) return message.reply(`you need to tag a user to fight them. (\`fight @MyMom#1234\`)`)
  
  if (tUser.id === message.author.id) return message.reply(`nice try! You can't battle yourself!`)
   
 if (!xp[tUser.id]) {
   xp[tUser.id] = {
     xp: 0,
     level: 1
   };
 }
  
  if (!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 0,
      bank: 200
    };
  }
  
  if (!coins[tUser.id]) {
    coins[tUser.id] = {
      coins: 0,
      bank: 200
    };
  }
  
  let battle = Math.floor(Math.random() * 99) + 1;
  let uCoins = coins[message.author.id].coins;
  let uBank = coins[message.author.id].bank;
  let tCoins = coins[tUser.id].coins;
  let tBank = coins[tUser.id].bank;
  
  if (uCoins < 100) {
    let uCoins = 100
  }
  
  if (battle > 49) {
    coins[message.author.id] = {
      coins: uCoins + tCoins,
      bank: uBank
    }
    coins[tUser.id] = {
      coins: 0,
      bank: tBank
    }
    let waveMessage = await message.channel.send(`\`FIGHT:\` 🔪 Swish 🗡`);
      waveMessage.edit(`\`FIGHT:\` 🗡 Swosh 🔪`);
      message.channel.send(waveMessage);
      waveMessage.edit(`⚔ <@${message.author.id}> has defeted ${tUser}!\n🏆 ${message.author.id} has won ${tCoins} coins!`);
      message.channel.send(waveMessage);
  }
  if (battle < 50) {
    coins[tUser.id] = {
      coins: uCoins + tCoins,
      bank: tBank
    }
    coins[message.author.id] = {
      coins: coins[message.author.id].coins - uCoins,
      bank: uBank
    }
    let waveMessage = await message.channel.send(`\`FIGHT:\` 🔪 Swish 🗡`);
      waveMessage.edit(`\`FIGHT:\` 🗡 Swosh 🔪`);
      message.channel.send(waveMessage);
      waveMessage.edit(`☠ <@${message.author.id}> has been defeted by ${tUser}!\n🏆 ${tUser} has won ${uCoins} coins!`);
      message.channel.send(waveMessage);
  }
}

module.exports.help = {
  name: "fight"
}
