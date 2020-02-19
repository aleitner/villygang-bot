const Discord = require('discord.js');
var auth = require('./auth.json');

token = process.env.BOT_TOKEN ? process.env.BOT_TOKEN : auth.token

// Initialize Discord Bot
var client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {   
    if (!msg.channel.name.includes("villygang")) {
        return
    }
    
    console.log(msg.channel.id)
    console.log(msg.content)

    if (msg.content.includes('<#'+msg.channel.id+'>')) {
        return
    }

    msg.delete(1000)
});

client.login(token);