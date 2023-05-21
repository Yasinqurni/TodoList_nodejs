'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('activities', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "users",
          key: "id",
          as: "user_id"
        }
      },
      title_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "titles",
          key: "id",
          as: "title_id"
        }
      },
      list: {
        type: Sequelize.STRING,
        allowNull: true
      },
      done: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('activities')
  }
};
