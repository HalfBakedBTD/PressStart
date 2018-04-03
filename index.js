const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  //bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});

  bot.user.setGame("r!help");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    //let kickEmbed = new Discord.RichEmbed()
    //.setDescription("Kick")
    //.setColor("#e56b00")
    //.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    //.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    //.addField("Kicked In", message.channel)
    //.addField("Tiime", message.createdAt)
    //.addField("Reason", kReason);
   

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("Can't find logs channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(`👢 USER KICKED 👢\n\nKicked: <@${kUser.id}>\n\nPunisher: <@${message.author.id}>\n\nKicked In: ${message.channel}\n\nReason: ${kReason}`);

    return;
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

    //let banEmbed = new Discord.RichEmbed()
    //.setDescription("~Ban~")
    //.setColor("#bc0000")
    //.addField("Banned User", `${bUser} with ID ${bUser.id}`)
    //.addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    //.addField("Banned In", message.channel)
    //.addField("Time", message.createdAt)
    //.addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Can't find logs channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(`\🔨 USER BANNED \🔨\n\nBanned User: <@${bUser.id}>\n\nBanned By: <@${message.author.id}>\n\nBanned In: ${message.channel}\n\nReason: ${bReason}`);


    return;
  }


  if(cmd === `${prefix}warn`){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);
    if (!rreason) return message.channel.send(`Please supply a reason.`)

    //let reportEmbed = new Discord.RichEmbed()
    //.setDescription("Reports")
    //.setColor("#15f153")
    //.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    //.addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    //.addField("Channel", message.channel)
    //.addField("Time", message.createdAt)
    //.addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "logs");
    if(!reportschannel) return message.channel.send("Couldn't find logs channel.");


    message.delete().catch(O_o=>{});
    rUser.send(`You were warned in ${message.guild.name} by ${message.author.username} for ${rreason}.`)
    reportschannel.send(`⚠ WARNING ⚠\n\nWarned: <@${rUser.id}>\n\nWarned By: <@${message.author.id}>\n\nWarned In: ${message.channel}\n\nReason: ${rreason}`);

    return;
  }




  if(cmd === `${prefix}sinfo`){

    //let sicon = message.guild.iconURL;
    //let serverembed = new Discord.RichEmbed()
    //.setDescription("Server Information")
    //.setColor("#15f153")
    //.setThumbnail(sicon)
    //.addField("Server Name", message.guild.name)
    //.addField("Created On", message.guild.createdAt)
    //.addField("You Joined", message.member.joinedAt)
    //.addField("Total Members", message.guild.memberCount);

    return message.channel.send(`📟 Server Information 📟\n\nServer Name: ${message.guild.name}\n\nTotal Members: ${message.guild.memberCount}`);
  }



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
