const mongoose = require('mongoose')

require('dotenv').config();

const MongoDB_URL = process.env.MongoDB_URL;
console.log(MongoDB_URL);
const connection =  mongoose.connect(MongoDB_URL);

module.exports = { connection };
