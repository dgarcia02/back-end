//================Depenedencies================//
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

//================Middleware================//
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/movies',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)
mongoose.connection.once('open', ()=>{
    console.log('Connected to Mongod...');
});
app.use(cors())

//================Controllers================//
const movieController = require('./controllers/main.js')
app.use('/movies', movieController)

//================PORT================//
app.listen(3000, () => {
    console.log('Listening on PORT 3000...')
})
