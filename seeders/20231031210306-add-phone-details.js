'use strict';
const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const directoryPath = path.join(__dirname, '../public/api/products');
        const files = fs.readdirSync(directoryPath);

        let allData = [];

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            const dataFromFile = fs.readFileSync(filePath);
            const dataString = dataFromFile.toString('utf-8');
            allData.push(
                JSON.parse(dataString)
            );
            // console.log(dataString);
        });
        allData = allData.map(item => ({
            ...item,
            description: JSON.stringify(item.description),
            createdAt: new Date(),
            updatedAt: new Date()
        }));

        allData.forEach(data => console.log(data));
        await queryInterface.bulkInsert('phonedetails', allData,{});
    },

    async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    }
};
