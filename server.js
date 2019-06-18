const Eris = require('eris');
 
const bot = new Eris("NTkwNTQ0MzYzNTg3ODk1MzAw.XQjxkg.i6IhzAvIFzMr3JbI9_DsVnQ87m8");   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 var http = require("http");
setInterval(function() {
    //http.get("http://giddy-plain.glitch.me"); //console.log('ping!')
}, 100); 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
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
app.get('/', (req, res) => {
//  gnome(req.query["channel"],req.query["value"])  
  res.send('<h1>Hello there</h1>');
})
app.get('/say', (req, res) => {
  gnome(req.query["channel"],req.query["value"])
  console.log('crab rave')
  
  res.send((req.query["channel"] + ' ' + req.query["value"]));
})

app.listen(process.env.PORT || 8080)
