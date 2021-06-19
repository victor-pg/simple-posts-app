const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

const Post = sequelize.define("post", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
}
);


module.exports = Post;