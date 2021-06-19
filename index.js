const express = require('express');
const sequelize = require('./database');

const config = require('./config.json');

const app = express();

app.use(express.json());
app.use('/api/',require('./routes/posts.routes'));

const PORT = process.env.PORT || config.port || 5000;

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => console.log(`Started on ${PORT}`))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start();


