const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
//app.use(express.json());

const uri = process.env.CONNECT_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database Connection succesfully !!!');
});

const stockRouter = require('./routes/stocks');

app.use('/stocks', stockRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 
