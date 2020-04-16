const Discord = require('discord.js');

// Initialize Discord Bot
var client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {   
    if (!msg.channel.name.includes("yanceygang")) {
        return
    }
    
    console.log(msg.channel.id)
    console.log(msg.content)

    if (msg.content.includes('<#'+msg.channel.id+'>')) {
        return
    }

    msg.delete(1000)
});

client.login(process.env.BOT_TOKEN);
