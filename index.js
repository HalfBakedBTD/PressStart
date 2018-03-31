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
  if (message.content === '!random') {
    let towers = ["**<@413984212119715840>'s** channel: https://www.youtube.com/channel/UCy_KxAueZjIGafQ62_5J1sQ", "**<@226658795189698561>'s** channel: https://www.youtube.com/channel/UCMHmzeE7ssaO0fqJZfovAbw", "**<@346687165868015616>'s** channel: https://www.youtube.com/c/HalfBakedGaming15", "**<@125507197584146432>'s** channel: https://www.youtube.com/user/p0nchok1", "**<@418071433734914070>'s** channel: https://www.youtube.com/confusinq"]
    let choice = Math.floor((Math.random() * towers.length));
    return message.channel.send(`<@${message.author.id}>, random spin:\n${towers[choice]}!`)
  }
});

bot.login(process.env.BOT_TOKEN);
