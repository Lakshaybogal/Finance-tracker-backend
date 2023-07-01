const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const routes = require('./routes/routes');

app.use(cors());
app.use(express.json());
app.use('/', routes);

mongoose
    .connect(process.env.DB_KEY, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Listening on PORT ' + process.env.PORT);
            console.log('Connected to the database');
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
