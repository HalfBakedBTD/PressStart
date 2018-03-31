const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const chratis_cooldown_time = 15;
const chratis_talked_users = new Set();
const button_cooldown_time = 30;
const button_talked_users = new Set();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (message.content === '!ping') {
    return message.channel.send(`📌 Pong! <@${message.author.id}>, I am online!`)
  }
  if (message.content === '!help') {
    return message.channel.send(`***Comming Soon...***`)
  }
});

bot.login(process.env.BOT_TOKEN);
