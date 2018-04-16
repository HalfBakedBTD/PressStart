const Discord = require("discord.js")
let game = require("./games.json")

module.exports.run = (bot, message, args) => {
  let penGameEmbed = new Discord.RichEmbed()
  .setAuthor("Number Guess", "https://discordapp.com/assets/c64559ce7db12f6dea3404fc44e42b96.svg")
  .setColor("#ecf0f1")
  .addField("How To Play:", "To start a game of guess the number, simply type the prefix and then `guess start`. Once you do this, I will choose a random number between 1 and 1000. If you guess the number within 10 guesses then you lots of xp and coins! (Don't worry, I'll tell you if you are too high, too low, or if you are getting close!)")
  .addField("Helps:", "**Frozen** - not even close.\n**Cold** - within 500 range of the number.\n**Warm** - within 50 range.\n**Boiling** - within 10 range of the number.\n\n`guess <number>` - lets you guess a number. (Example: `guess 500`)");
   if(!args[0]) return  message.channel.send(penGameEmbed)
}

module.exports.help = {
  name: "guess"
}
