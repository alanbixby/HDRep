const fs = require('fs');
const Discord = require('discord.js');

const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot Online.');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return; // Exempt non-commands and messages from self.

    const args = message.content.slice(prefix.length).split(/ +/); // Remove prefix, make array of elements; ignore mu spaces.
    const commandName = args.shift().toLowerCase(); // Expect first element to be command, follow are arguments.

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send(`There was an error when attempting that command. | ${error}`);
    }
});

client.login(token);