const { SlashCommandBuilder } = require('discord.js');
const companies = require('../models/companies');

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
      const name = interaction.options.getString('name');
      const industry = interaction.options.getString('industry');
      const salary = interaction.options.getInteger('salary');
      const ceo = interaction.user.id;
      const bal = 0;

      try {
        const company = await companies.create({
          name: name,
          industry: industry,
          salary: salary,
          ceo: ceo,
          bal: bal,
          uid: ceo
        });
  
        return interaction.reply(`New company with the following properties added: \nName: ${company.name} \nIndustry: ${company.industry} \nSalary: ${company.salary} \nCEO: ${company.ceo} \nBalance: ${company.bal} \nUID: ${company.uid}`);
      }
      catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
          return interaction.reply('UID exists, Error code 4001');
        }
  
        return interaction.reply('Something went wrong with adding a company, Error code 5000');
      }
	},
};