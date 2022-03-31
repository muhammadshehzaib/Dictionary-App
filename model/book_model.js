const mongoose = require('mongoose');
const db = require('../config/db');
const schema = new mongoose.Schema({ bookName: 'string', authorNmae : "string" });
const dictionary_Model = mongoose.model('dictionary', schema);

module.exports =dictionary_Model