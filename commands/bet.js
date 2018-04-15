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
  let xpAmt = (Math.floor(Math.random() * 9) + 1) * xp[message.author.id].level;
  
  if (dieAmt > 54) {
    xpAmt = xpAmt * 10
    coins[message.author.id] = {
      coins: uCoins + parseInt(args[0]),
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
    .addField("Roll:", `${dieAmt}`, true)
    .addField("Result:", `Win`, true)
    .addField("Win/Loss:", `+${parseInt(args[0])} coins`, true)
    .setFooter(`${message.author.username} +${xpAdd}XP`, message.author.displayAvatarURL);
    
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
    .setColor("#18dcff")
    .addField("Roll:", `${dieAmt}`, true)
    .addField("Result:", `Loss`, true)
    .addField("Win/Loss:", `-${parseInt(args[0])} coins`, true)
    .setFooter(`${message.author.username} +${xpAdd}XP`, message.author.displayAvatarURL);
    
    message.channel.send(betEmbed)
  }
}

module.exports.help = {
  name: "bet"
}
