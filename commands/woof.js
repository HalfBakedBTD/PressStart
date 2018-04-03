const Discord = require("discord.js");
const superAgent = require("superagent");

exports.run = async (bot, message, args) => {

    let{body} = await superAgent
    .get(`https://random.dog/woof.json`);

    message.channel.send(`Woof! This is a dog!\n${body.url}`);
}

module.exports.help = {
  name: "woof"
}
