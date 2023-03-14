const { SlashCommandBuilder } = require('@discordjs/builders');
const { companies, products } = require('../dbObjects');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('product')
    .setDescription('View a product')
    .addStringOption(option =>
      option.setName('product_name')
        .setDescription('The name of the product.')
        .setRequired(true))
        .setAutocomplete(true),
  async execute(interaction) {
    const company = await companies.findOne({ where: { ceo: interaction.user.id } });
    if (!company) return interaction.reply({ content: 'You do not own a company!', ephemeral: true });
    const product_name = interaction.options.getString('product_name');
    const product = await products.findOne({ where: { product_name: product_name } });
    if (!product) return interaction.reply({ content: 'Product not found!', ephemeral: true });
    const embed = {
      color: 0xff000,
      title: 'Products',
      fields: [
        {
          name: 'Product name',
          value: product.product_name,
        },
        {
          name: 'Product price',
          value: product.product_price,
        },
        {
          name: 'Product quality',
          value: product.product_quality,
        }, 
        {
          name: 'Marketing cost',
          value: product.product_marketing,
        },
        {
          name: 'Production amount',
          value: product.product_production,
        },
        {
          name: 'Production cost',
          value: product.product_production_cost,
        },
      ],
    };
    interaction.reply({ embeds: [embed] });
  }
};