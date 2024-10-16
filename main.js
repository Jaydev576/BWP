// Importing Modules
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// Create Connection to Database
const connectDB = require('./database/connect');
const myModel = require('./database/schema')
connectDB()

// Some Middleware & Path setting
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', './public/views')

let login = false;
let formSubmitted = false;


// Pages - Get Requests
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/home/index.html')
})
app.get('/templates', (req, res) => {
    if (login)
        res.sendFile(__dirname + '/public/pages/templates/index.html')
    else
        res.sendFile(__dirname + '/public/pages/login/index.html')
})
app.get('/preview', (req, res) => {
    if (login && formSubmitted) {
        let data = {
            Name_of_Business: 'WebTree',
            id: '670f85e306bada2a4006327d'
        }
        res.render('preview/preview', data)
    }
    else if (login && !formSubmitted)
        res.sendFile(__dirname + '/public/pages/templates/index.html')
    else
        res.sendFile(__dirname + '/public/pages/login/index.html')
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/pages/login/index.html')
})
app.get('/form', (req, res) => {
    if (login)
        res.sendFile(__dirname + '/public/pages/form/index.html')
    else
        res.sendFile(__dirname + '/public/pages/login/index.html')
})

app.get('/user/:id', async (req, res) => {
    try {
        // let x = 5
        let x = await myModel.findById(req.params.id)
        res.json({ x })
    } catch (error) {
        res.json({ 'id': req.params.id, 'status': 'ERROR' })
    }
    // try {
    //     // let x = 5
    //     let x = await myModel.findById(req.params.id)
    //     res.json({ x })
    // } catch (error) {
    //     res.json({ 'id': req.params.id, 'status': 'ERROR' })
    // }
})



// For previewing themes
app.get('/preview/theme1', (req, res) => {
    res.sendFile(__dirname + '/public/themes/theme_1/index.html')
})


// APIs
app.post('/login', (req, res) => {
    //send login data into Database
    let body = req.body;
    try {
        login = true;
        res.send({ 'redirectUrl': '/templates' })
    } catch (error) {
        res.send({ 'redirectUrl': '/login' })
    }
    // res.json(body)
})
app.post('/form', (req, res) => {
    let body = req.body;
    // console.log(body);

    // const myModel = mongoose.model('formdatas', schema)
    try {
        // const newData = new myModel(body)
        // newData.save();
        formSubmitted = true
        res.send({ 'redirectUrl': '/preview' })
        // res.json({ 'message': 'SUCCESS' })
    } catch (error) {
        res.send({ 'redirectUrl': '/form' })
    }

})
app.post('/logout', (req, res) => {
    login = false;
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})