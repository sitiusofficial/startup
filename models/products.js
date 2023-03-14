module.exports = (sequelize, Datatypes) => {
  return users = sequelize.define('products', {
    product_id  : {
      type: Datatypes.UUID,
      primaryKey: true,
      defaultValue: Datatypes.UUIDV4,
    },
    parent_company: {
      type: Datatypes.STRING,
    },
    product_name: {
      type: Datatypes.STRING,
    },
    product_price: {
      type: Datatypes.INTEGER,
    },
    product_stock: {
      type: Datatypes.INTEGER,
    },
    product_production: {
      type: Datatypes.INTEGER,
    },
    product_marketing: {
      type: Datatypes.INTEGER,
    },
    product_quality: {
      type: Datatypes.INTEGER,
    },
    product_production_cost: { 
      type: Datatypes.INTEGER,
    },
    product_type: {
      type: Datatypes.STRING,
    },
  }, {
    timestamps: false,
  });
};