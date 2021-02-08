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
    //1
    static associate(models) {
      // define association here
      userComment.belongsTo(models.user, {
        foreignKey: "userid"
      });
      userComment.belongsTo(models.userContent, {
        foreignKey: "contentid"
      });
    }
  };
  userComment.init({
    comment: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    contentid: DataTypes.INTEGER,
    userContentId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'userComment',
  });
  return userComment;
};