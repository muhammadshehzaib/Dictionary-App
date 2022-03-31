const express = require('express');
const router = new express.Router();
const bookModel = require('../model/book_model');

router.post('/dictionary',async (req, res)=>{
    const book = new bookModel(req.body)
      try {
        await book.save()
        res.status(201).send(book)
    } catch (e) {
        res.status(400).send(e)
    }
    console.log(req.body);

})
router.get('/dictionary',async(req, res)=>{
    try {
        const books = await bookModel.find({})
        res.send(books)
    } catch (e) {
        res.status(500).send()
    }
    
    console.log(req.body);

    
})

module.exports = router
