const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
let claims = require("../claims.json")

const claim_cooldown_time = 30;
const claim_talked_users = new Set();

module.exports.run = async (bot, message, args) => {
  if (claim_talked_users.has(message.author.id)) return message.reply("you have to wait before claiming rewards again.");
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
  let sCount = 1;
  let streak = '✅';
  while (uClaims > sCount) {
    streak = streak + '✅';
    sCount = sCount + 1;
  }
  
  claims[message.author.id] = {
    claims: uClaims
  }
  coins[message.author.id] = {
    coins: uCoins + prize,
    bank: uBank
  }
  
  //message.reply(`you have claimed ${prize} coins!\n\nStreak: ${uClaims}\n${streak}`)
  let claimEmbed = new Discord.RichEmbed()
  .setThumbnail((message.author.displayAvatarURL))
  .setColor("#9b59b6")
  .setDescription(`<@${message.author.id}>, you have claimed ${prize} coins!\n\nStreak: ${uClaims}\n${streak}☑`)
  
  message.channel.send(claimEmbed)
  claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 60000);
}

module.exports.help = {
  name: "claim"
}
