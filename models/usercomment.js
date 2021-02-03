'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    this.belongsTo(models.user)

    }
  };
  userComment.init({
    content: DataTypes.STRING,
    userid: DataTypes.INTEGER //user.js에 있는 id와 연결
  }, {
    sequelize,
    modelName: 'userComment',
  });
  return userComment;
};