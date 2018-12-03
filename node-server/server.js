require('dotenv').config();

const app = require('./config/express')();

app.listen(process.env.SERVER_PORT, 
    () => console.log('SERVER RUNNING PORT: '+ process.env.SERVER_PORT)
);