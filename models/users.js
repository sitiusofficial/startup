module.exports = (sequelize, Datatypes) => {
  return users = sequelize.define('users', {
    user_id:  {
      type: Datatypes.INTEGER,
      primaryKey: true,
    },
    balance: {
      type: Datatypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    timestamps: false,
  });
};