const Discord = require("discord.js");
let coins = require("../coins.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  let topCoins = `<@${message.author.id}>`;
  let topCoinsTwo = `<@${message.author.id}>`;
  let topCoinsThree = `<@${message.author.id}>`;
  let topCoinsFour = `<@${message.author.id}>`;
  let topCoinsFive = `<@${message.author.id}>`;
  let topCoinsSix = `<@${message.author.id}>`;
  let topCoinsSeven = `<@${message.author.id}>`;
  let topCoinsEight = `<@${message.author.id}>`;
  let topCoinsNine = `<@${message.author.id}>`;
  let topCoinsTen = `<@${message.author.id}>`;
  let topXP = `<@${message.author.id}>`;
  let topLevel = `<@${message.author.id}>`;
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0,
      bank: 200
    };
  }
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  let topCoinAmt = coins[message.author.id].coins + coins[message.author.id].bank;
  let topCoinAmtTwo = 1;
  let topCoinAmtThree = 1;
  let topCoinAmtFour = 1;
  let topCoinAmtFive = 1;
  let topCoinAmtSix = 1;
  let topCoinAmtSeven = 1;
  let topCoinAmtEight = 1;
  let topCoinAmtNine = 1;
  let topCoinAmtTen = 1;
  let topXPAmt = xp[message.author.id].xp;
  let topLevelAmt = xp[message.author.id].level;
  bot.users.filter(u => u.id !== `${message.author.id}`).forEach(user => {
    if(!coins[user.id]){
      coins[user.id] = {
        coins: 0,
        bank: 200
      };
    }
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    let plBal = coins[user.id].coins + coins[user.id].bank;
    let plXP = xp[message.author.id].xp;
    let plLevel = xp[message.author.id].level;
    if (plBal > topCoinAmt) {
      topCoinAmtTen = topCoinAmtNine
      topCoinsTen = topCoinsNine
      topCoinAmtNine = topCoinAmtEight
      topCoinsNine = topCoinsEight
      topCoinAmtEight = topCoinAmtSeven
      topCoinsEight = topCoinsSeven
      topCoinAmtSeven = topCoinAmtSix
      topCoinsSeven = topCoinsSix
      topCoinAmtSix = topCoinAmtFive
      topCoinsSix = topCoinsFive
      topCoinAmtFive = topCoinAmtFour
      topCoinsFive = topCoinsFour
      topCoinAmtFour = topCoinAmtThree
      topCoinsFour = topCoinsThree
      topCoinAmtThree = topCoinAmtTwo
      topCoinsThree = topCoinsTwo
      topCoinAmtTwo = topCoinAmt
      topCoinsTwo = topCoins
      topCoinAmt = plBal
      topCoins = `<@${user.id}>`
    } else {
      if (plBal > topCoinAmtTwo) {
        topCoinAmtTen = topCoinAmtNine
        topCoinsTen = topCoinsNine
        topCoinAmtNine = topCoinAmtEight
        topCoinsNine = topCoinsEight
        topCoinAmtEight = topCoinAmtSeven
        topCoinsEight = topCoinsSeven
        topCoinAmtSeven = topCoinAmtSix
        topCoinsSeven = topCoinsSix
        topCoinAmtSix = topCoinAmtFive
        topCoinsSix = topCoinsFive
        topCoinAmtFive = topCoinAmtFour
        topCoinsFive = topCoinsFour
        topCoinAmtFour = topCoinAmtThree
        topCoinsFour = topCoinsThree
        topCoinAmtThree = topCoinAmtTwo
        topCoinsThree = topCoinsTwo
        topCoinAmtTwo = plBal
        topCoinsTwo = `<@${user.id}>`
      } else {
        if (plBal > topCoinAmtThree) {
          topCoinAmtTen = topCoinAmtNine
          topCoinsTen = topCoinsNine
          topCoinAmtNine = topCoinAmtEight
          topCoinsNine = topCoinsEight
          topCoinAmtEight = topCoinAmtSeven
          topCoinsEight = topCoinsSeven
          topCoinAmtSeven = topCoinAmtSix
          topCoinsSeven = topCoinsSix
          topCoinAmtSix = topCoinAmtFive
          topCoinsSix = topCoinsFive
          topCoinAmtFive = topCoinAmtFour
          topCoinsFive = topCoinsFour
          topCoinAmtFour = topCoinAmtThree
          topCoinsFour = topCoinsThree
          topCoinAmtThree = plBal
          topCoinsThree = `<@${user.id}>`
        } else {
          if (plBal > topCoinAmtFour) {
            topCoinAmtTen = topCoinAmtNine
            topCoinsTen = topCoinsNine
            topCoinAmtNine = topCoinAmtEight
            topCoinsNine = topCoinsEight
            topCoinAmtEight = topCoinAmtSeven
            topCoinsEight = topCoinsSeven
            topCoinAmtSeven = topCoinAmtSix
            topCoinsSeven = topCoinsSix
            topCoinAmtSix = topCoinAmtFive
            topCoinsSix = topCoinsFive
            topCoinAmtFive = topCoinAmtFour
            topCoinsFive = topCoinsFour
            topCoinAmtFour = plBal
            topCoinsFour = `<@${user.id}>`
          } else {
            if (plBal > topCoinAmtFive) {
              topCoinAmtTen = topCoinAmtNine
              topCoinsTen = topCoinsNine
              topCoinAmtNine = topCoinAmtEight
              topCoinsNine = topCoinsEight
              topCoinAmtEight = topCoinAmtSeven
              topCoinsEight = topCoinsSeven
              topCoinAmtSeven = topCoinAmtSix
              topCoinsSeven = topCoinsSix
              topCoinAmtSix = topCoinAmtFive
              topCoinsSix = topCoinsFive
              topCoinAmtFive = plBal
              topCoinsFive = `<@${user.id}>`
            } else {
              if (plBal > topCoinAmtSix) {
                topCoinAmtTen = topCoinAmtNine
                topCoinsTen = topCoinsNine
                topCoinAmtNine = topCoinAmtEight
                topCoinsNine = topCoinsEight
                topCoinAmtEight = topCoinAmtSeven
                topCoinsEight = topCoinsSeven
                topCoinAmtSeven = topCoinAmtSix
                topCoinsSeven = topCoinsSix
                topCoinAmtSix = plBal
                topCoinsSix = `<@${user.id}>`
              } else {
                if (plBal > topCoinAmtSix) {
                  message.channel.send("`If the bot sends this message something is screwed up!`")
                } else {
                  if (plBal > topCoinAmtSeven) {
                    topCoinAmtTen = topCoinAmtNine
                    topCoinsTen = topCoinsNine
                    topCoinAmtNine = topCoinAmtEight
                    topCoinsNine = topCoinsEight
                    topCoinAmtEight = topCoinAmtSeven
                    topCoinsEight = topCoinsSeven
                    topCoinAmtSeven = plBal
                    topCoinsSeven = `<@${user.id}>`
                  } else {
                    if (plBal > topCoinAmtEight) {
                      topCoinAmtTen = topCoinAmtNine
                      topCoinsTen = topCoinsNine
                      topCoinAmtNine = topCoinAmtEight
                      topCoinsNine = topCoinsEight
                      topCoinAmtEight = plBal
                      topCoinsEight = `<@${user.id}>`
                    } else {
                      if (plBal > topCoinAmtNine) {
                        topCoinAmtTen = topCoinAmtNine
                        topCoinsTen = topCoinsNine
                        topCoinAmtNine = plBal
                        topCoinsNine = `<@${user.id}>`
                      } else {
                        if (plBal > topCoinAmtTen) {
                          topCoinAmtTen = plBal
                          topCoinsTen = `<@${user.id}>`
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } 
    if (plXP > topXPAmt) {
      topXPAmt = plXP
      topXP = `<@${user.id}>`
    }
    if (plLevel > topLevelAmt) {
      topLevelAmt = plLevel
      topLevel = `<@${user.id}>`
    }
  });
  let topEmbed = new Discord.RichEmbed()
  .setColor("#fff200")
  .setThumbnail("https://tse2.mm.bing.net/th?id=OIP.QBoHWsq4Y9QFzlFHAJatVAHaF7&pid=Api")
  .setDescription(`**${topXP}** has the most xp. [${topXPAmt}XP]\n\n**${topLevel}** has the current highest level. [Lvl. ${topLevelAmt}]\n\nTop Coins:\n\t1st - ${topCoins} with 💰${topCoinAmt}.\n\t2nd - ${topCoinsTwo} with 💰${topCoinAmtTwo}.\n\t3rd - ${topCoinsThree} with 💰${topCoinAmtThree}.\n\t4th - ${topCoinsFour} with 💰${topCoinAmtFour}.\n\t5th - ${topCoinsFive} with 💰${topCoinAmtFive}.\n\t6th - ${topCoinsSix} with 💰${topCoinAmtSix}.\n\t7th - ${topCoinsSeven} with 💰${topCoinAmtSeven}.\n\t8thst - ${topCoinsEight} with 💰${topCoinAmtEight}.\n\t9th - ${topCoinsNine} with 💰${topCoinAmtNine}.\n\t10th - ${topCoinsTen} with 💰${topCoinAmtTen}.`)

  message.channel.send(topEmbed)
}

//HELP
                                                                 
module.exports.help = {
  name: "top"
}
