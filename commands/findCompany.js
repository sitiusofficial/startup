const { companies } = require('../dbObjects');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('findcompany')
    .setDescription('Fetches information a company')
    .addStringOption(option =>
      option
        .setName('uid')
        .setDescription('UID of the company')
        .setRequired(true)),
  async execute(interaction) {
    const uid = interaction.options.getString('uid');
    const company = await companies.findOne({ where: { uid: uid } });
    if (!company) return interaction.reply('Company not found, Error code 4004');
    const embed =  {
      color: 0x0099ff,
      title: 'Found information about ' + company.name,
      fields: [
        {
          name: 'Name',
          value: company.name,
        },
        {
          name: 'Industry',
          value: company.industry,
        },
        {
          name: 'Salary',
          value: company.salary,
        },
        {
          name: 'CEO',
          value: company.ceo,
        },
        {
          name: 'Balance',
          value: company.bal,
        },
        {
          name: 'UID',
          value: company.uid,
        },
      ],
      timestamp: new Date(),
    };
    return interaction.reply({ embeds: [embed] });
  }
};