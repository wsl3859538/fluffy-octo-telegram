'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('asks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      title: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      recommend: {
        type: Sequelize.INTEGER
      },
      hot: {
        type: Sequelize.INTEGER
      },
      anonymity: {
        type: Sequelize.INTEGER
      },
      comments: {
        type: Sequelize.INTEGER
      },
      votes: {
        type: Sequelize.INTEGER
      },
      like: {
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
    await queryInterface.dropTable('asks');
  }
};