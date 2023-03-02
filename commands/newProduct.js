const { SlashCommandBuilder } = require('@discordjs/builders');
const { companies, products } = require('../dbObjects');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('newproduct')
    .setDescription('Create a new product')
    .addStringOption(option =>
      option.setName('product_name')
        .setDescription('The name of the product.')
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName('product_price')
        .setDescription('The price of the product.')
        .setRequired(true))
    .addIntegerOption(option => 
      option.setName('product_production')
        .setDescription('The daily production of the product.')
        .setRequired(true))
    .addIntegerOption(option =>
       option.setName('marketing_cost')
        .setDescription('The cost of marketing the product.')
       .setRequired(true)),
  async execute(interaction) {
    const company = await companies.findOne({ where: { ceo: interaction.user.id } });
    if (!company) return interaction.reply({ content: 'You do not own a company!', ephemeral: true });
    const product_name = interaction.options.getString('product_name');
    const product_price = interaction.options.getInteger('product_price');
    const product_quality = Math.floor(Math.random() * 10) + 1;
    const marketing_cost = interaction.options.getInteger('marketing_cost');
    const product_production = interaction.options.getInteger('product_production');

    const product = await products.create({
      product_name: product_name,
      product_price: product_price,
      product_quality: product_quality,
      product_marketing: marketing_cost,
      product_production: product_production,

    })

    const embed = {
      color: 0xff000,
      title: 'New product created!',
      fields: [
        {
          name: 'Product name',
          value: product_name,
        },
        {
          name: 'Product price',
          value: product_price,
        },
        {
          name: 'Product quality',
          value: product_quality,
        }, 
        {
          name: 'Marketing cost',
          value: marketing_cost,
        },
      ],
    }

    return interaction.reply( {embeds: [embed]});
  }
};
