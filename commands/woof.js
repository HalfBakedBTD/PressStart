const Discord = require("discord.js");
const superAgent = require("superagent");

exports.run = async (bot, message, args) => {

    let{body} = await superAgent
    .get(`https://random.dog/woof.json`);

    //message.channel.send(`Woof! This is a dog!\n${body.url}`);
    let dogEmbed = new Discord.RichEmbed()
    .setColor('#2c3e50')
    .addField("Woof! This is a dog!", `${body.url}`, true);
  
  message.channel.send(dogEmbed);
}

module.exports.help = {
  name: "woof"
}
