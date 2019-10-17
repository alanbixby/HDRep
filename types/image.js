const { ArgumentType } = require('discord.js-commando');

class ImageArgumentType extends ArgumentType {
    constructor(client) {
        super(client, 'image');
    }

    validate(value, msg, arg) {
        const attachment = msg.attachments.first();
        if (attachment) {
            if (!attachment.height || !attachment.width) return false;
            return true;
        }
        return false;
    }

    async parse(value, msg, arg) {
        const attachment = msg.attachments.first();
        if (attachment) return attachment.url;
    }

    isEmpty(value, msg, arg) {
        if (msg.attachments.size) return false;
        return this.client.registry.types.get('user').isEmpty(value, msg, arg);
    }
};

module.exports = ImageArgumentType;