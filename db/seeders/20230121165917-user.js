'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [
      {
        fullname: "user 1",
        code:  '$2y$08$vR4cMz4J5cREkhoHJc7Do.DXhuLHIReU/.xecoB0BjmokfVYcMNZO' //1212
      },
      {
        fullname: "user 2",
        code:  '$2y$08$y1xJYwHgZH2NeMGE7MsPIuPsDuofGj.0VZLMf1qCumbou8IJFjQUK' //9532
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {})
  }
}
