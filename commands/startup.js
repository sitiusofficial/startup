const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('startup')
		.setDescription('Starts a company')
		.addStringOption(option =>
			option
				.setName('name')
				.setDescription('Name of the startup')
        .setRequired(true))
    .addStringOption(option =>
      option
        .setName('industry')
        .setDescription('Industry of the startup')
        .setRequired(true)
        .addChoices(
					{ name: '⚡ Consumer goods', value: 'ind_cg' },
					{ name: '🚗 Car manufacturer', value: 'ind_cm' },
				))
      .addIntegerOption(option =>
        option
          .setName('salary')
          .setDescription('Set the salary you earn a __day__')
          .setRequired(true)),
    async execute(interaction) {
      await interaction.reply('successs');
	},
};