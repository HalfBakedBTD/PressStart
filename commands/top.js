const Discord = require("discord.js");
let coins = require("../coins.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  let topCoins = `<@${message.author.id}>`;
  let topXP = `<@${message.author.id}>`;
  let topLevel = `<@${message.author.id}>`;
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0,
      bank: 200
    };
  }
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  let topCoinAmt = coins[message.author.id].coins + coins[message.author.id].bank;
  let topXPAmt = xp[message.author.id].xp;
  let topLevelAmt = xp[message.author.id].level;
  bot.users.filter(u => u.id !== `${message.author.id}`).forEach(user => {
    if(!coins[user.id]){
      coins[user.id] = {
        coins: 0,
        bank: 200
      };
    }
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    let plBal = coins[user.id].coins + coins[user.id].bank;
    let plXP = xp[message.author.id].xp;
    let plLevel = xp[message.author.id].level;
    if (plBal > topCoinAmt) {
      topCoinAmt = plBal
      topCoins = `<@${user.id}>`
    }
    if (plXP > topXPAmt) {
      topXPAmt = plXP
      topXP = `<@${user.id}>`
    }
    if (plLevel > topLevelAmt) {
      topLevelAmt = plLevel
      topLevel = `<@${user.id}>`
    }
    if (plBal === topCoinAmt) {
      topCoinAmt = plBal
      topCoins = `Multiple Users`
    }
    if (plXP === topXPAmt) {
      topXPAmt = plXP
      topXP = `Multiple Users`
    }
    if (plLevel === topLevelAmt) {
      topLevelAmt = plLevel
      topLevel = `Multiple Users`
    }
  });
  let topEmbed = new Discord.RichEmbed()
  .setColor("#fff200")
  .setThumbnail("https://tse2.mm.bing.net/th?id=OIP.QBoHWsq4Y9QFzlFHAJatVAHaF7&pid=Api")
  .setDescription(`${topCoins} has the most coins. [💰${topCoinAmt}]\n${topXP} has the most xp. [${topXPAmt}XP]\n${topLevel} owns the current highest level. [Lvl. ${topLevelAmt}]`)

  message.channel.send(topEmbed)
}

module.exports.help = {
  name: "top"
}
