const Discord = require("discord.js");
const superAgent = require("superagent");

exports.run = async (bot, message, args) => {

    let{body} = await superAgent
    .get(`https://aws.random.cat/meow`);

    //message.channel.send(`Meow! This is a cat!\n${body.file}`);
    let catEmbed = new Discord.RichEmbed()
    .setColor('#2ecc71')
    .setImage(body.file);
  
  message.channel.send(catEmbed);
}

module.exports.help = {
  name: "meow"
}
