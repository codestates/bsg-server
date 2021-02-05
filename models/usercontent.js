'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usercontent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user) // user 의 id === usercontent 의 userid
      this.hasMany(models.userComment)
    }
  };
  usercontent.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    visits: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usercontent',
  });
  return usercontent;
};