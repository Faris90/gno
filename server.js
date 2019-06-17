const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 var http = require("http");
setInterval(function() {
    //http.get("http://giddy-plain.glitch.me"); //console.log('ping!')
}, 100); 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
var myArray = [
  "https://www.shitpostbot.com/img/sourceimages/beter-cuphead-59da758c3f4b9.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Peter_Griffin.png/220px-Peter_Griffin.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IoBOFapjeHwHYyCOKZWzA5AExCQc18DhptnS-u0TtvcN3EFb",
  "https://i.redd.it/h5trhp098w221.png",
  "https://i1.sndcdn.com/artworks-000222142653-lm4htd-t500x500.jpg",
  "http://photos1.blogger.com/blogger/49/125/1600/peter_griffin%20-%20ascii.gif",
  "https://i.redd.it/72a6ujwq4zzz.png"
];
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('giraffe'));
var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
 var nome = [
 "gUcK yOu I aM a RoBlOxIaN","go commit die"
];
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('woo!help')) {                 // If the message content includes "1337"
       // bot.createMessage(msg.channel.id, 'Here are the Beta commands! \nThank you beta tester of this bot!\n p**!**desc: Shows the description in a slightly verbose way. \n p**!**mee6: Shows the MEE6 official site \n p**!**help: Shows this message \n p**!**channel: Shows EternalMakaush Channel \n p**!**server: Sends a link to the bot. \n p**!**oros: Sends a picture of Oros. \n p**!**update: This will give you the version and what beta it is. \n p**!**modded ftb: Gives you the link of the Modded FTB. \n p**!**private server: Gives you the link of our private server \n p**!**changelog: Shows the Changelog from before UpTimeRobot uptime reloader \n p**!**Void: Shows a picture of Soundwaves tank. \n p**!**bullet: Shows Makaushs private server');  // Send a message in the same channel with "damn it"
        bot.createMessage(msg.channel.id,'Here are the thicc commands \n woo**!**gnome: Gnomed. \n woo**!**nut: Ｈｏｎｅｙ　Gｎｕｔ　ヴ蒸曖 \n woo**!**beter: Peter griffin \n woo**!**mee6: Get attention of mee6 \n woo**!**moana: watch moana \n woo**!**roblox: commit die')
     console.log("channel ID is " + msg.channel.id)
    }// Don't even think about editing this.
});
function gnome  (channel,value) {
//bot.on('messageCreate', (msg) => {                     // When a message is created

   bot.createMessage(channel,value)
   
//});
}

bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('woo!gnome')) {                 // If the message content includes "1337"
       // bot.createMessage(msg.channel.id, 'Here are the Beta commands! \nThank you beta tester of this bot!\n p**!**desc: Shows the description in a slightly verbose way. \n p**!**mee6: Shows the MEE6 official site \n p**!**help: Shows this message \n p**!**channel: Shows EternalMakaush Channel \n p**!**server: Sends a link to the bot. \n p**!**oros: Sends a picture of Oros. \n p**!**update: This will give you the version and what beta it is. \n p**!**modded ftb: Gives you the link of the Modded FTB. \n p**!**private server: Gives you the link of our private server \n p**!**changelog: Shows the Changelog from before UpTimeRobot uptime reloader \n p**!**Void: Shows a picture of Soundwaves tank. \n p**!**bullet: Shows Makaushs private server');  // Send a message in the same channel with "damn it"
        bot.createMessage(msg.channel.id,'https://www.youtube.com/watch?v=6n3pFFPSlW4')
       console.log("channel ID is " + msg.channel.id)
    }// Don't even think about editing this.
});

bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('woo!roblox')) {                 // If the message content includes "1337"
       // bot.createMessage(msg.channel.id, 'Here are the Beta commands! \nThank you beta tester of this bot!\n p**!**desc: Shows the description in a slightly verbose way. \n p**!**mee6: Shows the MEE6 official site \n p**!**help: Shows this message \n p**!**channel: Shows EternalMakaush Channel \n p**!**server: Sends a link to the bot. \n p**!**oros: Sends a picture of Oros. \n p**!**update: This will give you the version and what beta it is. \n p**!**modded ftb: Gives you the link of the Modded FTB. \n p**!**private server: Gives you the link of our private server \n p**!**changelog: Shows the Changelog from before UpTimeRobot uptime reloader \n p**!**Void: Shows a picture of Soundwaves tank. \n p**!**bullet: Shows Makaushs private server');  // Send a message in the same channel with "damn it"
      var woo = nome[Math.floor(Math.random()*myArray.length)];
      bot.createMessage(msg.channel.id,woo)
       console.log("channel ID is " + msg.channel.id)
    }// Don't even think about editing this.
});
bot.on('messageCreate', (msg) => {                     // When a message is created
    //if(msg.content.includes(':nome:')) {                 // If the message content includes "1337"
       // bot.createMessage(msg.channel.id, 'Here are the Beta commands! \nThank you beta tester of this bot!\n p**!**desc: Shows the description in a slightly verbose way. \n p**!**mee6: Shows the MEE6 official site \n p**!**help: Shows this message \n p**!**channel: Shows EternalMakaush Channel \n p**!**server: Sends a link to the bot. \n p**!**oros: Sends a picture of Oros. \n p**!**update: This will give you the version and what beta it is. \n p**!**modded ftb: Gives you the link of the Modded FTB. \n p**!**private server: Gives you the link of our private server \n p**!**changelog: Shows the Changelog from before UpTimeRobot uptime reloader \n p**!**Void: Shows a picture of Soundwaves tank. \n p**!**bullet: Shows Makaushs private server');  // Send a message in the same channel with "damn it"
      //  bot.createMessage(msg.channel.id,'https://www.youtube.com/watch?v=6n3pFFPSlW4')
       console.log("channel ID is " + msg.channel.id)
   // }// Don't even think about editing this.
});
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('!ping')) {                 // If the message content includes "1337"
       // bot.createMessage(msg.channel.id, 'Here are the Beta commands! \nThank you beta tester of this bot!\n p**!**desc: Shows the description in a slightly verbose way. \n p**!**mee6: Shows the MEE6 official site \n p**!**help: Shows this message \n p**!**channel: Shows EternalMakaush Channel \n p**!**server: Sends a link to the bot. \n p**!**oros: Sends a picture of Oros. \n p**!**update: This will give you the version and what beta it is. \n p**!**modded ftb: Gives you the link of the Modded FTB. \n p**!**private server: Gives you the link of our private server \n p**!**changelog: Shows the Changelog from before UpTimeRobot uptime reloader \n p**!**Void: Shows a picture of Soundwaves tank. \n p**!**bullet: Shows Makaushs private server');  // Send a message in the same channel with "damn it"
        bot.createMessage(msg.channel.id,'gnong')
      
      
       console.log("channel ID is " + msg.channel.id)
    }// Don't even think about editing this.
});
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('woo!moana')) {                 // If the message content includes "1337"
       // bot.createMessage(msg.channel.id, 'Here are the Beta commands! \nThank you beta tester of this bot!\n p**!**desc: Shows the description in a slightly verbose way. \n p**!**mee6: Shows the MEE6 official site \n p**!**help: Shows this message \n p**!**channel: Shows EternalMakaush Channel \n p**!**server: Sends a link to the bot. \n p**!**oros: Sends a picture of Oros. \n p**!**update: This will give you the version and what beta it is. \n p**!**modded ftb: Gives you the link of the Modded FTB. \n p**!**private server: Gives you the link of our private server \n p**!**changelog: Shows the Changelog from before UpTimeRobot uptime reloader \n p**!**Void: Shows a picture of Soundwaves tank. \n p**!**bullet: Shows Makaushs private server');  // Send a message in the same channel with "damn it"
        bot.createMessage(msg.channel.id,'https://media.discordapp.net/attachments/487031625679503360/576425900556419085/image0.jpg?width=600&height=329')
       console.log("channel ID is " + msg.channel.id)
    }// Don't even think about editing this.
});
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('woo!mee6')) {                 // If the message content includes "1337"
       // bot.createMessage(msg.channel.id, 'Here are the Beta commands! \nThank you beta tester of this bot!\n p**!**desc: Shows the description in a slightly verbose way. \n p**!**mee6: Shows the MEE6 official site \n p**!**help: Shows this message \n p**!**channel: Shows EternalMakaush Channel \n p**!**server: Sends a link to the bot. \n p**!**oros: Sends a picture of Oros. \n p**!**update: This will give you the version and what beta it is. \n p**!**modded ftb: Gives you the link of the Modded FTB. \n p**!**private server: Gives you the link of our private server \n p**!**changelog: Shows the Changelog from before UpTimeRobot uptime reloader \n p**!**Void: Shows a picture of Soundwaves tank. \n p**!**bullet: Shows Makaushs private server');  // Send a message in the same channel with "damn it"
        bot.createMessage(msg.channel.id,'What did you call me you little shit?')
       console.log("channel ID is " + msg.channel.id)
    }// Don't even think about editing this.
});
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('woo!beter')) {                 // If the message content includes "1337"
       // bot.createMessage(msg.channel.id, 'Here are the Beta commands! \nThank you beta tester of this bot!\n p**!**desc: Shows the description in a slightly verbose way. \n p**!**mee6: Shows the MEE6 official site \n p**!**help: Shows this message \n p**!**channel: Shows EternalMakaush Channel \n p**!**server: Sends a link to the bot. \n p**!**oros: Sends a picture of Oros. \n p**!**update: This will give you the version and what beta it is. \n p**!**modded ftb: Gives you the link of the Modded FTB. \n p**!**private server: Gives you the link of our private server \n p**!**changelog: Shows the Changelog from before UpTimeRobot uptime reloader \n p**!**Void: Shows a picture of Soundwaves tank. \n p**!**bullet: Shows Makaushs private server');  // Send a message in the same channel with "damn it"
       var peter = myArray[Math.floor(Math.random()*myArray.length)];
      bot.createMessage(msg.channel.id,peter)
                          console.log("channel ID is " + msg.channel.id)
    }// Don't even think about editing this.
});
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('woo!nut')) {                 // If the message content includes "1337"
       // bot.createMessage(msg.channel.id, 'Here are the Beta commands! \nThank you beta tester of this bot!\n p**!**desc: Shows the description in a slightly verbose way. \n p**!**mee6: Shows the MEE6 official site \n p**!**help: Shows this message \n p**!**channel: Shows EternalMakaush Channel \n p**!**server: Sends a link to the bot. \n p**!**oros: Sends a picture of Oros. \n p**!**update: This will give you the version and what beta it is. \n p**!**modded ftb: Gives you the link of the Modded FTB. \n p**!**private server: Gives you the link of our private server \n p**!**changelog: Shows the Changelog from before UpTimeRobot uptime reloader \n p**!**Void: Shows a picture of Soundwaves tank. \n p**!**bullet: Shows Makaushs private server');  // Send a message in the same channel with "damn it"
        bot.createMessage(msg.channel.id,'https://ih0.redbubble.net/image.295060969.3129/ap,550x550,16x12,1,transparent,t.u3.png')
   console.log("channel ID is " + msg.channel.id)
    }// Don't even think about editing this.
});
bot.editStatus('online', {
  name: 'woo!help',
  type: 0
});
bot.connect();
// server.js
// where your node app starts

// init project
/*const express = require('express');
const app = express();*/

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
const express = require('express')
const app = express()
//const say = require('say')
app.get('/say', (req, res) => {
  gnome(req.query["channel"],req.query["value"])
  console.log('crab rave')
  
  res.send('moe');
})

app.listen(8080)