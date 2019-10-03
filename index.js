const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;

client.once('ready', () => {
    console.log('Bot Online.');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return; // Exempt non-commands and messages from self.

    const args = message.content.slice(prefix.length).split(/ +/); // Remove prefix, make array of elements; ignore mu spaces.
    const command = args.shift().toLowerCase(); // Expect first element to be command, follow are arguments.

    if (command === 'ping') {
        message.channel.send('Pong!');
    }
});

client.login(token);