const express = require('express');
const bookModel = require('../model/book_model');
const router = new express.Router();

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
router.get("/dictionary/:id",async (req, res) => {
    const _id = req.params.id
    try {
        const book = await bookModel.findById(_id)
        if (!book) {
            return res.status(404).send()
        }
        res.send(book)

    } catch (error) {
        res.status(500).send()
    }
    console.log(req.body);

})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
