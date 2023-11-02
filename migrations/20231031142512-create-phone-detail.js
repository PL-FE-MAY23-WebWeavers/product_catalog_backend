'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('phonedetails', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            namespaceId: {
                allowNull: false,
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            capacityAvailable: {
                type: Sequelize.ARRAY(Sequelize.STRING)
                // type: Sequelize.JSONB
            },
            capacity: {
                type: Sequelize.STRING
            },
            priceRegular: {
                type: Sequelize.FLOAT
            },
            priceDiscount: {
                type: Sequelize.FLOAT
            },
            colorsAvailable: {
                type: Sequelize.ARRAY(Sequelize.STRING)
                // type: Sequelize.JSONB
            },
            color: {
                type: Sequelize.STRING
            },
            images: {
                type: Sequelize.ARRAY(Sequelize.STRING)
                // type: Sequelize.JSONB
            },
            description: {
                type: Sequelize.JSONB
            },
            screen: {
                type: Sequelize.STRING
            },
            resolution: {
                type: Sequelize.STRING
            },
            processor: {
                type: Sequelize.STRING
            },
            ram: {
                type: Sequelize.STRING
            },
            camera: {
                type: Sequelize.STRING
            },
            zoom: {
                type: Sequelize.STRING
            },
            cell: {
                type: Sequelize.ARRAY(Sequelize.STRING)
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('phonedetails');
    }
};
