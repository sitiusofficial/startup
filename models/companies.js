module.exports = (sequelize, Datatypes) => {
  return companies = sequelize.define('companies', {
	  name: Datatypes.STRING,
	  industry: Datatypes.STRING,
	  salary: Datatypes.INTEGER,
    uid: {
      type: Datatypes.STRING,
      unique: true,
    },
    ceo: Datatypes.INTEGER,
    bal: Datatypes.INTEGER,
  }, {
    timestamps: false,
  });
};
