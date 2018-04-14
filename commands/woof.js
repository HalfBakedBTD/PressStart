const Discord = require("discord.js");
const superAgent = require("superagent");

exports.run = async (bot, message, args) => {

    let{body} = await superAgent
    .get(`https://random.dog/woof.json`);

    //message.channel.send(`Woof! This is a dog!\n${body.url}`);
    let dogEmbed = new Discord.RichEmbed()
    .setColor('#000000')
    .setThumbnail("https://tse3.mm.bing.net/th?id=OIP.QbYo3zcLpLvozS5IyOsKSAHaId&pid=15.1&P=0&w=300&h=300")
    .addField("Woof! This is a dog!", `${body.url}`, true);
  
  message.channel.send(dogEmbed);
}

module.exports.help = {
  name: "woof"
}
