const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class ExampleCommand extends Command {
    constructor(client){
        super(client, {
            name: 'examplecommand',
            aliases: ['example', 'test', 'template'],
            group: 'template',
            memberName: 'templatecommand',
            description: 'This is a template command used for educational purposes.',
        });
    }

    run(msg) {
        const embed = new RichEmbed()
            .setDescription('This is a test command!')
            .setColor(0xFFDFFF); 
        return msg.embed(embed);
    }
};