//Serving website dynamically to allow for backend processes

//Libraries
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
require('dotenv').config();

//Variable Declaration
const app = express();
const PORT = process.env.PORT || 80;

//Middleware
app.use(express.static(path.join(__dirname, "../webapp/build")))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


//Mailer functionality
app.post('/send_message', function(req, res){
    //Get form data through axios

    //Send Email with Mailgun API
    const formData = require('form-data')
    const Mailgun = require('mailgun.js')
    const mailgun = new Mailgun(formData)
    const DOMAIN = process.env.MAILGUN_DOMAIN
    const mg = mailgun.client({username: 'Society of Asian Scientists and Engineeres', key: process.env.MAILGUN_KEY, domain: DOMAIN})
    const data = {
        from: 'bananasauce100@gmail.com',
        to: 'bananasauce100@gmail.com',
        subject: `From: ${req.body.persname} Email: ${req.body.email}`,
        text: `${req.body.text}`,
    }
    mg.messages.create(DOMAIN, data)
    .then(msg => console.log(msg))
    .catch(err => console.error(err))
})

//Render build index.html
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../webapp/build/', 'index.html'))
})

//Starting express server
app.listen(PORT, () => {
    console.log('App listening on port', PORT);
})