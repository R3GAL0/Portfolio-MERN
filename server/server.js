// barebones server to use the emailer

// Import packages
const express = require('express')
const morgan = require('morgan')// App
const app = express()
// Morgan
app.use(morgan('tiny'))


// routes below

// First route
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})

// email route
// for 404 page, and contact page
const sendEmail = require('./utils/emailer');
app.post('/', (req, res) => {
    try {
        // disabled until i can find an smtp server
        // sendEmail(req.body.email, req.body.subject, req.body.msg)
        res.json('email function is disabled in server.js')

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})


// Starting server
app.listen('3000')
console.log('Server listening on PORT 3000')