"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "admin",
          email: "admin@admin.com",
          rol: "admin",
          password: bcrypt.hashSync("admin"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          username: "user",
          email: "user@gmail.com",
          rol: "user",
          password: bcrypt.hashSync("user"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
