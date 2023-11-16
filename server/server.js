// barebones server to use the emailer

// Import packages
const express = require('express')
const morgan = require('morgan')// App
const app = express()
// Morgan
app.use(morgan('tiny'))

// Starting server
app.listen('3000')
console.log('Server listening on PORT 3000')

// routes below

// First route
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})

// email route
// for 404 page, and contact page
import sendEmail from './utils/emailer'
app.post('/', (req, res) => {
    try {
        // send the email
        sendEmail(req.body.email, req.body.subject, req.body.msg)
        // subject is 'Error', or 'Contact'
        res.json('email sent')

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})