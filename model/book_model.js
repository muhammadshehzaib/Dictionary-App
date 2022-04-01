const mongoose = require('mongoose');
// const schema = new mongoose.Schema({ bookName: 'string', authorNmae : "string" });
// const dictionary_Model = mongoose.model('dictionary', schema);
const dictionary_Model = mongoose.model('dictionary', {
    bookName: {
        type: String,
    },
    authorName: {
        type: String,
    }
})

module.exports = dictionary_Model