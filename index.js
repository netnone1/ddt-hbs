const express = require('express')
const axios = require('axios')
const path = require('path')
const hbs = require('hbs')
const router = require('./routes/router')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views/partials'))

app.use(router)


app.listen(3000, () => {
    console.log('Server is starting')
})