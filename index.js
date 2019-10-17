const { CommandoClient } = require('discord.js-commando');
const { prefix, token, owners } = require('./config.json');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: prefix,
    owner: owners,
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerTypesIn(path.join(__dirname, 'types')) // image.js lives in ./types/image.js
    .registerGroups([
        ['groupkey', 'Actual Group Name'],
        ['template', 'Template Command Group'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,    // Disable the default help command.
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
    console.log(`Bot Online. Logged in as ${client.user.tag} (${client.user.id})`);
    client.user.setActivity()
});

client.login(token);