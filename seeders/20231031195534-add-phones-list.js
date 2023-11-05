'use strict';
const { CreatedAt } = require('sequelize-typescript');
const phones =  require('../public/api/products.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    */
        await queryInterface.bulkInsert('phones', phones.map(phone => {
            return {
                ...phone,
                createdAt: new Date(),
                updatedAt: new Date()
            };
        }), {});
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

