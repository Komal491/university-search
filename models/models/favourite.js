'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favourite = sequelize.define('Favourite', {
    name: DataTypes.STRING,
    state_province: DataTypes.STRING,
    web_pages: DataTypes.STRING
  }, {});
  Favourite.associate = function(models) {
    // associations can be defined here
  };
  return Favourite;
};
