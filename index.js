const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");
let claims = require("./claims.json")

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setGame("r!help");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  
    if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0,
      bank: 200
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 35;
  let baseAmt = Math.floor(Math.random() * 15) + 35;
  let mBank = coins[message.author.id].bank;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt,
      bank: mBank
    };
    
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  //let coinEmbed = new Discord.RichEmbed()
  //.setAuthor(message.author.username)
  //.setColor("#0000FF")
  //.addField("💸", `${coinAmt} coins added!`);

  message.channel.send(`💸 ${message.author.username} you just gained ${coinAmt} coins. 💸`).then(msg => {msg.delete(5000)});
  }
  
  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 50;
  let lvlcoin = coins[message.author.id].coins;
  let lvlcg = Math.floor(Math.random() * 5) + 5 * curlvl;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    xp[message.author.id].xp = curxp - nxtLvl;
    coins[message.author.id].coins = lvlcoin + lvlcg;
    let uplvl = curlvl + 1;
    //let lvlup = new Discord.RichEmbed()
    //.setTitle("Level Up!")
    //.setColor(purple)
    //.addField("New Level", curlvl + 1);

   message.channel.send(`✨ <@${message.author.id}> has leveled up to level ${uplvl}!`).then(msg => {msg.delete(8000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.content.startsWith(`${prefix}`)) {
    return
  }
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
 
});

bot.login(process.env.BOT_TOKEN);
//bot.login(tokens.token);
