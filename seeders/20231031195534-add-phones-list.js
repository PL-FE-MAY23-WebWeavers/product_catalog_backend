'use strict';
const phones =  require('../public/products.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    */
    await queryInterface.bulkInsert('phones', phones, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('phones', {
      id: phones.map(phone => phone.id)
    }, {});
  }
};

