const companies = require('../models/companies');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fetchcompany')
    .setDescription('Fetches a company')
    .addStringOption(option =>
      option
        .setName('uid')
        .setDescription('UID of the company')
        .setRequired(true)),
  async execute(interaction) {
    const uid = interaction.options.getString('uid');
    const company = await companies.findOne({ where: { uid: uid } });
    if (!company) return interaction.reply('Company not found, Error code 4000');
    return interaction.reply(`Company with the following properties found: \nName: ${company.name} \nIndustry: ${company.industry} \nSalary: ${company.salary} \nCEO: ${company.ceo} \nBalance: ${company.bal} \nUID: ${company.uid}`);
  }
};