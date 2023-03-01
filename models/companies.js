module.exports = (sequelize, Datatypes) => {
  return companies = sequelize.define('companies', {
	  name: Datatypes.STRING,
	  industry: Datatypes.STRING,
	  salary: Datatypes.INTEGER,
    uid: {
      type: Datatypes.UUID,
      defaultValue: Datatypes.UUIDV4,
      primaryKey: true,
    },
    ceo: Datatypes.INTEGER,
    bal: Datatypes.INTEGER
  }, {
    timestamps: false,
  });
};
