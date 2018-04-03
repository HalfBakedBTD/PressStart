const Discord = require("discord.js");
const superAgent = require("superagent");

exports.run = async (bot, message, args) => {

    let{body} = await superAgent
    .get(`https://random.cat`);

    message.channel.send(`Meow! This is a cat!\n${body.url}`);
}

module.exports.help = {
  name: "meow"
}
