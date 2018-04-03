const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

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

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if(cmd === `${prefix}binfo`){

    let botAvatar = bot.user.displayAvatarURL;
    var text_channels = 0, voice_channels = 0;
    bot.channels.array().forEach(channel => {
      if (channel.type == 'text') {
        text_channels += 1;
      } else if (channel.type == 'voice') {
        voice_channels += 1;
      }
    });

    //let botEmbed = new Discord.RichEmbed()

    //.setDescription("Bot Information", )
    //.setColor('#000000')
    //.setThumbnail(botAvatar)
    //.addField("Name", bot.user.username)
    //.addField("Current Version", botconfig.version)
    //.addField("Born On", bot.user.createdAt)
    //.addField('Users', + bot.users.size + ' members', true)
    //.addField("Servers", `${bot.guilds.size} servers.`)
    //.addField("Text channels", text_channels, true)
    //.addField("Voice Channels", voice_channels, true)
    //.addField("Made with:", "discord.js")
    //.addField("Made by", "<@275831434772742144>")
    //.addField("Github", "https://github.com/tetra-dev/ium")
    //.addField("Memory ", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB",);

    return message.channel.send(`🤖Bot Information🤖\n\nName: ${bot.user.username}\n\nCreated On: ${bot.user.createdAt}\n\nOnline Users: ${bot.users.size}\n\nText Channels: ${text_channels}\n\nVoice Channels: ${voice_channels}\n\nMade With: discord.js\n\nMade By: HalfBakedGaming#6768 with ID: 346687165868015616\n\nMemory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB"}`);
  }

});

bot.login(process.env.BOT_TOKEN);
//bot.login(tokens.token);
