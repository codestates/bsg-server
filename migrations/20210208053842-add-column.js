'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [queryInterface.addColumn(
      "userContents", "tier", {
        type: Sequelize.STRING
      }
    ),
    queryInterface.addColumn(
      "userComments", "tier", {
        type: Sequelize.STRING
      }
    )
  ]
  },

  down: async (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn(
      "userContents", "tier"
      ),
      queryInterface.removeColumn(
        "userComments", "tier"
      )
    ]
  }
};
//
