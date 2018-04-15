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
  if (pUser.id === message.author.id) return message.reply(`nice try! You can't give to yourself!`)
  

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;
  let uBank = coins[message.author.id].bank;
  let pBank = coins[pUser.id].bank;

  if(sCoins < args[1]) return message.reply("there are not enough coins in your hand!");
  if(parseInt(args[1]) < 1) return message.reply("you can't donate less than 1 coin!")

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1]),
    bank: uBank
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1]),
    bank: pBank
  };

  //message.channel.send(`🙌 ${message.author} has given ${pUser} ${args[1]} coins.`);
  //let botAvatar = bot.user.displayAvatarURL;
    let giveEmbed = new Discord.RichEmbed()
    .setColor('#000000')
    .setThumbnail("https://tse3.mm.bing.net/th?id=OIP.QbYo3zcLpLvozS5IyOsKSAHaId&pid=15.1&P=0&w=300&h=300")
    .setDescription(`Donator: <@${message.author.id}>\n\nGave To: ${pUser}\n\nAmount: ${args[1]}`);
  
  message.channel.send(giveEmbed);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "give"
}
