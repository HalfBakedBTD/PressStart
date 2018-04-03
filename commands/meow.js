const Discord = require("discord.js");
const superAgent = require("superagent");

exports.run = async (bot, message, args) => {

    let{body} = await superAgent
    .get(`https://random.cat/meow.json`);

    message.channel.send(`Meow! This is a dcat!\n${body.url}`);
}

module.exports.help = {
  name: "meow"
}
