const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Only people with `MANAGE_MESSAGES` permissions can use this command!");
  let muterole = message.guild.roles.find(`name`, "muted");
  if (muterole) return message.reply("there is already a `muted` role in the server! I can create a new one if you delete the current one!")
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  return message.reply("I have created a `muted` role!")
}

module.exports.help = {
  name: "cmr"
}
