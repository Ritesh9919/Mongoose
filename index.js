const express = require('express');
const db = require('./config/mongoose');
const errorHandlerMiddleware  = require('./middleware/error_handler');
const port = 8000;

const app = express();

app.use(express.json());



app.use('/', require('./routes'));

app.use(errorHandlerMiddleware);


app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
})