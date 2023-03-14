const { Events } = require('discord.js');
const{ products, companies } = require('../dbObjects');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
    const company = await companies.findOne({ where: { ceo: interaction.user.id } });
		const product = await products.findOne({ where: { product_name: interaction.product_name, parent_company: company.uid } });

		if (!product) {
			console.error(`No product matching ${interaction.product_name} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};