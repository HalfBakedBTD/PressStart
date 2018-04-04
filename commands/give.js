const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345

  if(!coins[message.author.id]){
    return message.reply("You don't have any coins!")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!pUser) return message.channel.send(`Please mention a user!`)

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0,
      bank: 200
    };
  }
  
  if(isNaN(args[1])) return message.reply("please supply a number!");
  

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.reply("there are not enough coins in your bank!");
  if(parseInt(args[1]) < 1) return message.reply("you can't donate less than 1 coin!")

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`🙌 ${message.author} has given ${pUser} ${args[1]} coins.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "give"
}
