'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //1
    await queryInterface.createTable('userComments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.INTEGER
      },
      contentid: {
        type: Sequelize.INTEGER
      },
      userContentId: {
        type: Sequelize.INTEGER
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userComments');
  }
};