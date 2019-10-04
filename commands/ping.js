module.exports = {
    name: 'ping',
    description: 'A default test command for seeing if the bot is truly online.',
    execute(message, args) {
        message.channel.send('Pong.');
    }
};