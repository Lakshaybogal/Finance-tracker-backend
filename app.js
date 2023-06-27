
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const routes = require('./routes/routes');
app.use(cors());
app.use(express.json());
app.use('/',routes)
mongoose.connect(process.env.DB_KEY).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listening on PORT ' + process.env.PORT);
        console.log('Conected to db');
    })
}
)

