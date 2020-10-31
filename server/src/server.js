require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const routes = require("./routes");

const port = 5000;
const url = process.env.MONGODB_URI;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', err => {
  console.log('Mongoose error', err);
});

db.once('open', async () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use('/',routes())
    
    
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})


