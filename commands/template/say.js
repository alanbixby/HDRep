const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class SayCommand extends Command {
    constructor(client){
        super(client, {
            name: 'say',
            aliases: ['repeat', 'state'],
            group: 'template',
            memberName: 'say',
            description: 'Replies with the text that you provide it.',
            examples: ['say Hello there!'],
            args: [
                {
                    key: 'text', // This is the argument in the run method.
                    prompt: 'What text would you like the bot to say?', // What the bot should ask if no argument is provided.
                    type: 'string' // string, integer, user, member
                }
            ]
        });
    }

    run(msg, { text }) {
        const embed = new RichEmbed()
            .setDescription(`You told the bot to say:\n"${text}"`)
            .setColor(0x33CC33); 
        return msg.embed(embed);
    }
};