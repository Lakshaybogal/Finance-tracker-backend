const express = require('express');
const route = express.Router();
const { addUser, earnTranscations, spendTranscations, getUser, getUserDetails, getTransaction } = require('../controller/controller')
route.post('/newuser', addUser);
route.patch('/earn', earnTranscations);
route.patch('/spend', spendTranscations);
route.post('/login', getUser);
route.get('/user/:id', getUserDetails);
route.get('/transactions/:id', getTransaction);


module.exports = route