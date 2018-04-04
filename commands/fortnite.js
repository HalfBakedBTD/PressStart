const Discord = require("discord.js");
const config = require("../botconfig.json")
const apikey = require("../keys.json")
const Fortnite = require("fortnite")
const ft = new Fortnite(apikey.fortnite)

module.exports.run = async (bot, message, args) => {
  let username = args[0];
  let platform = args[1] || "pc";
  
  let data = ft.getInfo(username, platform).then(data => {
    console.log(data);
  }).catch(e => {
      console.log(e);
      message.channel.send(`I couldn't find that user in the database.`);
  });
  
}

module.exports.help = {
  name: "fortnite"
}
