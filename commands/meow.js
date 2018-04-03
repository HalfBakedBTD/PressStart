const Discord = require("discord.js");
const superAgent = require("superagent");

exports.run = async (bot, message, args) => {

    let{body} = await superAgent
    .get(`https://random.cat/meow`);

    let dogEmbed = new Discord.RichEmbed()
    .setColor("#bd9a82")
    .setTitle("Meow! This is a cat! :dog:")
    .setImage(body.file);

    message.channel.send(`${dogEmbed}`);
}

module.exports.help = {
  name: "meow"
}
