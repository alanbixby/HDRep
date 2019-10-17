const { ArgumentType } = require('discord.js-commando');

class SkipArgumentType extends ArgumentType {
	constructor(client) {
		super(client, 'skip');
		this.skippy = new Set(['skip', 'no', 'pass', 's', 'none']);
	}

	validate(value) {
		const lc = value.toLowerCase();
		return this.skippy.has(lc);
	}

	parse(value) {
		const lc = value.toLowerCase();
		if(this.truthy.has(lc)) return true;
		throw new RangeError('Unknown skip value.');
	}
}

module.exports = SkipArgumentType;