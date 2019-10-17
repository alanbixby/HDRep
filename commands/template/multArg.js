const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class SayCommand extends Command {
    constructor(client){
        super(client, {
            name: 'multiple',
            aliases: ['m', 'multi'],
            group: 'template',
            memberName: 'dm',
            description: 'Messages a user you mention.',
            examples: ['say Hello there!'],
            throttling: {
                usages: 1,
                duration: 18000
            },
            args: [
                {
                    key: 'user',
                    prompt: 'Which user do you intend me to message?',
                    type: 'user',
                },
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string',
                    validate: text => {
                        if (text.length < 201) return true;
                        return 'Message is above 200 characters.';
                    }
                }
            ]
        });
    }

    run(msg, { user, content }) {
        const embed = new RichEmbed()
            .setDescription(`You told the bot to say:\n"${content}"`)
            .setColor(0x33CC33); 
        return user.send(embed);
    }
};