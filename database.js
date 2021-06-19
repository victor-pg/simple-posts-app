const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('posts', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports=sequelize;