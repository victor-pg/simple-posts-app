const express = require('express');
const path = require('path');
const sequelize = require('./database');

const config = require('./config.json');

const app = express();

app.use(express.json());
app.use('/api/',require('./routes/posts.routes'));

app.use('/',express.static(path.join(__dirname,'client','build')));

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

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


