const { SlashCommandBuilder } = require('@discordjs/builders');
const { companies } = require('../dbObjects');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bankrupt')
    .setDescription('Bankrupt your company'),
  async execute(interaction) {
    const company = await companies.findOne({ where: { ceo: interaction.user.id } });
    if (!company) return interaction.reply({ content: 'You do not own a company!', ephemeral: true });
    await companies.destroy({ where: { ceo: interaction.user.id } });
    return interaction.reply(`You have bankrupted ${company.name}!`);
  }
};