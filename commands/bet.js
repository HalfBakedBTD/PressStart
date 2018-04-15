const Discord = require("discord.js");
let coins = require("../coins.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
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
  if(isNaN(args[0])) return message.reply("please supply a number!");
  
  let uCoins = coins[message.author.id].coins;
  let uBank = coins[message.author.id].bank;
  let uXP = xp[message.author.id].xp;
  let uLevel = xp[message.author.id].level;
  
  if(uCoins < args[0]) return message.reply("there are not enough coins in your hand!");
  if(parseInt(args[0]) < 1) return message.reply("you can't bet less than 1 coin!")
  
  let dieAmt = Math.floor(Math.random() * 99) + 1;
  let xpAmt = (Math.floor(Math.random() * 3) + 1) * xp[message.author.id].level;
  
  if (dieAmt > 54) {
    let win = parseInt(args[0]);
    if (dieAmt === 100) {
      win = win * 8
    }
    xpAmt = xpAmt * 5
    coins[message.author.id] = {
      coins: uCoins + win,
      bank: uBank
    }
    xp[message.author.id] = {
      xp: uXP + xpAmt,
      level: uLevel
    }
    let betEmbed = new Discord.RichEmbed()
    .setTitle(`💰 Bet by ${message.author.username}:`)
    .setThumbnail((message.author.displayAvatarURL))
    .setColor("#18dcff")
    .setDescription("In the `bet` command, you roll a one hundred sided die. A roll of 55+ gets you a win while a role of under 55 gets you a loss. If you roll an exact one hundred u get 8x your bet.")
    .addField("Roll:", `${dieAmt}`, true)
    .addField("Result:", `Win`, true)
    .addField("Amount Got/Lost:", `+${win} coins.`, true)
    .addField("Coins Left:", `${coins[message.author.id].coins}`, true)
    .setFooter(`${message.author.username} +${xpAmt}XP`, message.author.displayAvatarURL);
    
    message.channel.send(betEmbed)
  }
  if (dieAmt < 55) {
    coins[message.author.id] = {
      coins: uCoins - parseInt(args[0]),
      bank: uBank
    }
    xp[message.author.id] = {
      xp: uXP + xpAmt,
      level: uLevel
    }
    let betEmbed = new Discord.RichEmbed()
    .setTitle(`💰 Bet by ${message.author.username}:`)
    .setThumbnail((message.author.displayAvatarURL))
    .setColor("#ff3838")
    .setDescription("`bet` has a 45% chance of a win which doubles your money.\nIn the `bet` command, you roll a one hundred sided die. A roll of 55+ gets you a win while a role of under 55 gets you a loss.")
    .addField("Roll:", `${dieAmt}`, true)
    .addField("Result:", `Loss`, true)
    .addField("Amount Got/Lost:", `-${parseInt(args[0])} coins.`, true)
    .addField("Coins Left:", `${coins[message.author.id].coins}`, true)
    .setFooter(`${message.author.username} +${xpAmt}XP`, message.author.displayAvatarURL);
    
    message.channel.send(betEmbed)
  }
}

module.exports.help = {
  name: "bet"
}
