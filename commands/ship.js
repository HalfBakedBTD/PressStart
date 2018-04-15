const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
  let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!tUser) return message.reply("please mention a user. `ship <user>`")
  
  let dieAmt = Math.floor(Math.random() * 99) + 1;
  
  if (dieAmt > 40) {
    let countries = ["France", "Germany", "Siberia", "Republic of Congo", "Egypt", "Brazil", "Mexico", "Madagascar", "Japan", "China", "Peru", "South Africa", "Mozambique", "Russia", "Zootopia", "Neverland", "Isle of Men"];
    let pick = Math.floor((Math.random() * countries.length));
    
    let shipEmbed = new Discord.RichEmbed()
    .setThumbnail("https://tse1.mm.bing.net/th?id=OIP.tfr_D1SglUNeoT52T8_yygHaFj&pid=15.1&P=0&w=235&h=177")
    .setColor("#18dcff")
    .setDescription(`We tied and boxed ${tUser} and shiped him to ${countries[pick]}.`)
    
    return message.channel.send(shipEmbed)
  }
  if (dieAmt < 41) {
    let type = ["lovers", "falling in and out of love 5 or more years", "friends with benefits", "hot lovers", "new couple", "boring marriage", "abusive relationship"];
    let pick = Math.floor((Math.random() * type.length));
    
    let shipEmbed = new Discord.RichEmbed()
    .setThumbnail("https://tse1.mm.bing.net/th?id=OIP.XdN_SYt59sbmRABmLeladAEsDI&pid=15.1&P=0&w=254&h=170")
    .setColor("#18dcff")
    .setDescription(`We have shipped (as in relationship) <@${message.author.id}> and ${tUser} as ${type[pick]}.`)
    
    return message.channel.send(shipEmbed)
  }
}

module.exports.help = {
  name: "ship"
}
