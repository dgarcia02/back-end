//================Depenedencies================//
const express = require('express')
const router = express.Router()
const Movie = require('../models/main.js')

//================Routes================//
//-----Index-----//
router.get('/', (req, res) => {
    Movie.find({}, (err, foundMovie) => {
        res.json(foundMovie)
    })
})

//-----Create-----//
router.post('/', (req, res) => {
    Movie.create(req.body, (err, createdMovie) => {
        res.json(createdMovie)
    })
})

//-----Edit-----//
router.put('/:id', (req, res) => {
    Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}, (err, updatedMovie) => {
            res.json(updatedMovie)
        }
    )
})

//-----Delete-----//
router.delete('/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
        res.json(deletedMovie)
    })
})


//================Export================//
module.exports = router
