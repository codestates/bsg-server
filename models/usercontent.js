'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //
    static associate(models) {
      // define association here
      userContent.belongsTo(models.user, {
        foreignKey: "userid"
      });
      userContent.hasMany(models.userComment);
    }
  };
  userContent.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    visits: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'userContent',
  });
  return userContent;
};