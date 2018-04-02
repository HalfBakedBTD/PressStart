const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

//const tokens = require('./tokens.json');

let coins = require("./coins.json");
let xp = require("./xp.json");

let cdSeconds = 5;
let cooldown = new Set();
const button_cooldown_time = 30;
const button_talked_users = new Set();

function shout(bot) {
    let towers = ["**<@413984212119715840>'s** channel: https://www.youtube.com/channel/UCy_KxAueZjIGafQ62_5J1sQ", "**<@226658795189698561>'s** channel: https://www.youtube.com/channel/UCMHmzeE7ssaO0fqJZfovAbw", "**<@346687165868015616>'s** channel: https://www.youtube.com/c/HalfBakedGaming15", "**<@125507197584146432>'s** channel: https://www.youtube.com/user/p0nchok1", "**<@418071433734914070>'s** channel: https://www.youtube.com/confusinq"]
    let choice = Math.floor((Math.random() * towers.length));
    bot.channels.filter(c => c.name === 'random-shoutouts').forEach(channel => channel.send(`I randomly rolled a channel:\n${towers[choice]}`));
  setTimeout(() => shout(bot), 10*60000);
}


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
	  shout(bot)
	  bot.channels.filter(c => c.name === 'random-shoutouts').forEach(channel => channel.send(`I have restarted.`));
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.content.startsWith('!')) {
	if (button_talked_users.has(message.author.id)) return
  }
  
  if (!coins[message.author.id]) {
	coins[message.author.id] = {
	  coins: 0
	};
  }
  
  let coinAmt = Math.floor(Math.random() * 7) + 1;
  let baseAmt = Math.floor(Math.random() * 7) + 1;
  console.log(`COINS: ${coinAmt} : ${baseAmt}`);
  
  if (coinAmt === baseAmt) {
	message.channel.send(`💰 <@${message.author.id}> +🍪${coinAmt}!`).then(message => {message.delete(2000)});
    coins[message.author.id] = {
	  coins: coins[message.author.id].coins + coinAmt
	};
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
	if (err) console.log(err)
  });
  }
  
  //let xpAdd = Math.floor(Math.random() * 7) + 8;
  //console.log(`XP: ${xpAdd}`)
  
  //xp[message.author.id].xp = xp[message.author.id] + xpAdd
  
  //if (!xp[message.author.id]) {
    //xp[message.author.id] {
	  //xp: 0,
	  //level: 1
	//};
  //}
  
  //let nextLvl = xp[message.author.id].level * 40;
  //let curxp = xp[message.author.id].xp;
  //let curLvl = xp[message.author.id].level;
  //if (nextLvl <= xp[message.author.id].xp) {
    //xp[message.author.id].level = xp[message.author.id].level + 1;
  //} 

  //fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    //if(err) console.log(err)
  //});
    let xpAdd = Math.floor(Math.random() * 7) + 1;
	message.channel.send(`✨ ${message.author.username} +${xpAdd} XP!`).then(message => {message.delete(500)});
	
	if(!xp[message.author.id]){
	  xp[message.author.id] = {
		xp: 0,
		level: 1
	  };
	}
  
	let curxp = xp[message.author.id].xp;
	let curlvl = xp[message.author.id].level;
	let nxtLvl = xp[message.author.id].level * 50;
	xp[message.author.id].xp =  curxp + xpAdd;
	if(nxtLvl <= xp[message.author.id].xp){
	  xp[message.author.id].level = curlvl + 1;
		
		//xp[message.author.id] {
			//xp: xp[message.author.id].xp - nxtLvl
			//level: xp[message.author.id].level
		//}
	  //let lvlup = new Discord.RichEmbed()
	  //.setTitle("You Leveled Up!")
	  //.setColor("#FFFFFF")
	  //.addField("New Level", curlvl + 1);
		let coinMult = Math.floor(Math.random() * 7) + 1;
		let coinGain = xp[message.author.id].level * coinMult
		coins[message.author.id] = {
	    coins: coins[message.author.id].coins + coinGain
	  };
	  
	  message.channel.send(`✨ <@${message.author.id}> has just reached ${xp[message.author.id].level} ✨`).then(message => {message.delete(2000)});
	}
	
	fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
	  if(err) console.log(err)
	});  
  if (message.content === '!ping') {
		message.delete();
    return message.channel.send(`📌 Pong! <@${message.author.id}>, I am online!`)
  }
  if (message.content === '!lvl') {
		message.delete();
	if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    //let curxp = xp[message.author.id].xp;
    //let curlvl = xp[message.author.id].level;
    //let nxtLvlXp = curlvl * 200;
    let difference = xp[message.author.id].level * 50;

  //let lvlEmbed = new Discord.RichEmbed()
  //.setAuthor(message.author.username)
  //.setColor("#7f46b7")
  //.addField("Level", curlvl, true)
  //.addField("XP", curxp, true)
  //.setFooter(`${difference} XP till level up`, message.author.displayAvatarURL);

    message.channel.send(`<@${message.author.id}> here are your stats:\n\n🎚 Level: ${xp[message.author.id].level}\n\n✨ Experience: ${xp[message.author.id].xp}/${difference}`);
  }
  if (message.content === '!help') {
		message.delete();
    return message.channel.send(`**__<@${message.author.id}> here are my commands:__**\n\n📓 **!help** - Shows this stuff.\n🔘 **!random** - sends a random verified channel.\n\n🏦 **!cash** or **!bal** - sends your bank info.\n💵 **!give** or **!pay** - Allows sending of money to other users.\n✨ **!lvl** - shows level stats.`)
  }
  if (message.content === '!random') {
		message.delete();
    let towers = ["**<@413984212119715840>'s** channel: https://www.youtube.com/channel/UCy_KxAueZjIGafQ62_5J1sQ", "**<@226658795189698561>'s** channel: https://www.youtube.com/channel/UCMHmzeE7ssaO0fqJZfovAbw", "**<@346687165868015616>'s** channel: https://www.youtube.com/c/HalfBakedGaming15", "**<@125507197584146432>'s** channel: https://www.youtube.com/user/p0nchok1", "**<@418071433734914070>'s** channel: https://www.youtube.com/confusinq"]
    let choice = Math.floor((Math.random() * towers.length));
    message.channel.send(`\`I DMed you a random channel!\``)
    return message.author.send(`<@${message.author.id}>, random spin:\n${towers[choice]}!`)  
  }
  if (message.content === '!bal') {
		message.delete();
	 if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }

    let userCoins = coins[message.author.id].coins;

    //let moneyEmbed = new Discord.RichEmbed()
    //.setAuthor(message.author.username)
    //.setColor("FFFFFF")
    //.addField("💰Total iumics", `You have a total of **${userIumics}** iumics`);
    
    message.channel.send(`🏦 <@${message.author.id}> you have 🍪${userCoins} 🏦`);
  }
  if (message.content === '!me') {
		message.delete();
	 if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }

    let userCoins = coins[message.author.id].coins;
	if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    //let curxp = xp[message.author.id].xp;
    //let curlvl = xp[message.author.id].level;
    //let nxtLvlXp = curlvl * 200;
    let difference = xp[message.author.id].level * 50;

    //let moneyEmbed = new Discord.RichEmbed()
    //.setAuthor(message.author.username)
    //.setColor("FFFFFF")
    //.addField("💰Total iumics", `You have a total of **${userIumics}** iumics`);
    
    message.reply(`:green_book: <@${message.author.id}> :green_book:\n\n:cookie: ${userCoins}\n\n:sparkles: Level ${xp[message.author.id].level}\tExpirience: ${xp[message.author.id].xp}/${difference}`);
  }
  if (message.content === '!cash') {
		message.delete();
	 if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }

    let userCoins = coins[message.author.id].coins;

    //let moneyEmbed = new Discord.RichEmbed()
    //.setAuthor(message.author.username)
    //.setColor("FFFFFF")
    //.addField("💰Total iumics", `You have a total of **${userIumics}** iumics`);
    
    message.channel.send(`🏦 <@${message.author.id}> you have 🍪${userCoins} 🏦`);
  }
  if (message.content.startsWith('!give')) {
		message.delete();
    if(!coins[message.author.id]){
      return message.reply("You don't have any cash!")
    }

    let payUsers = message.mentions.users.first();

    if(!coins[payUsers.id]){
      coins[payUsers.id] = {
        coins: 0
      };
    }

    let payCoins = coins[payUsers.id].coins;
    let sCoins = coins[message.author.id].coins;

    if(message.author.id === payUsers.id){
      return message.reply("You can't give to yourself!")
  }
  
  if (parseInt(args[1]) < 0) return message.channel.send(`You can't give less then 🍪0!`)

  if(isNaN(args[1])) return message.channel.send("Please supply a number!");

    if(sCoins < args[1]) return message.reply("You do not have enough 🍪!");

    coins[message.author.id] = {
      coins: sCoins - parseInt(args[1])
    };

    coins[payUsers.id] = {
      coins: payCoins + parseInt(args[1])
    };

    message.channel.send(`🔷 <@${message.author.id}> has given <@${payUsers.id}> **🍪${args[1]}**.`);

    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
      if(err) cosole.log(err)
    });
  }
  if (message.content.startsWith('!pay')) {
		message.delete();
    if(!coins[message.author.id]){
      return message.reply("You don't have any cash!")
    }

    let payUsers = message.mentions.users.first();

    if(!coins[payUsers.id]){
      coins[payUsers.id] = {
        coins: 0
      };
    }

    let payCoins = coins[payUsers.id].coins;
    let sCoins = coins[message.author.id].coins;

    if(message.author.id === payUsers.id){
      return message.reply("You can't give to yourself!")
  }
  
  if (parseInt(args[1]) < 0) return message.channel.send(`You can't give less then 🍪0!`)

  if(isNaN(args[1])) return message.channel.send("Please supply a number!");

    if(sCoins < args[1]) return message.reply("You do not have enough 🍪!");

    coins[message.author.id] = {
      coins: sCoins - parseInt(args[1])
    };

    coins[payUsers.id] = {
      coins: payCoins + parseInt(args[1])
    };

    message.channel.send(`🔷 <@${message.author.id}> has given <@${payUsers.id}> **🍪${args[1]}**.`);

    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
      if(err) cosole.log(err)
    });
  }
	if (!message.content.startsWith('!')) {
		bot.channels.filter(c => c.name === 'moneys').forEach(channel => channel.send(`.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nNEW FILES:`));
	  bot.channels.filter(c => c.name === 'moneys').forEach(channel => channel.send({
      files: ["./xp.json"]
    }));
	  bot.channels.filter(c => c.name === 'moneys').forEach(channel => channel.send({
      files: ["./coins.json"]
    }));
	}
	button_talked_users.add(message.author.id);
    setTimeout(() => {
      button_talked_users.delete(message.author.id);
    }, button_cooldown_time * 1000);
});

bot.login(process.env.BOT_TOKEN);
//bot.login(tokens.token);
