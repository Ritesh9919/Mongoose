const express = require('express');
const db = require('./config/mongoose');
const port = 8000;

const app = express();

app.use(express.json());



app.use('/', require('./routes'));


app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
})