const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
  let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!tUser) return message.reply("please mention a user. `ship <user>`")
  
  let dieAmt = Math.floor(Math.random() * 99) + 1;
  
  if (dieAmt > 40) {
    let countries = ["France", "Germany", "Siberia", "Republic of Congo", "Egypt", "Brazil", "Mexico", "Madagascar", "Japan", "China"];
    let pick = Math.floor((Math.random() * countries.length));
    
    let shipEmbed = new Discord.RichEmbed()
    .setColor("#18dcff")
    .setDescription(`We tied and boxed ${tUser} and shiped him to ${countries[pick]}.`)
    .setAttachment("https://tse1.mm.bing.net/th?id=OIP.tfr_D1SglUNeoT52T8_yygHaFj&pid=15.1&P=0&w=235&h=177")
    
    return message.channel.send(shipEmbed)
  }
}

module.exports.help = {
  name: "ship"
}
