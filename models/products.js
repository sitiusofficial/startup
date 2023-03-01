module.exports = (sequelize, Datatypes) => {
  return users = sequelize.define('products', {
    uid:  {
      type: Datatypes.INTEGER,
      primaryKey: true,
    },
    product_id  : {
      type: Datatypes.INTEGER,
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
  }, {
    timestamps: false,
  });
};