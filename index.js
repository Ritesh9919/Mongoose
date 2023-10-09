const express = require('express');
const port = 8000;

const app = express();

app.use(express.json());



app.use('/', require('./routes/index'));


app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
})