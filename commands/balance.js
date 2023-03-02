const { users } = require('../dbObjects.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('balance')
    .setDescription('Check your balance.')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to check the balance of.')
        .setRequired(false)),
  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    try {
      let target = await users.findOne({ where: { user_id: user.id } });
      if (!target) {
        target = await users.create({ user_id: user.id });
      }

    const embed = {
      "title": "Balance",
      "description": `${user.tag} has ${target.balance}💰.`,
      "color": 0xff000,
      "timestamp": new Date(),
    }
    return interaction.reply( { embeds: [embed]});
    }
    catch (error) {
      throw error;
  }
  },
};
