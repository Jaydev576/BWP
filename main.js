const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

const port = 3000

app.get('/theme1', (req, res) => {
    res.render('theme1', { title: 'Habibi' })
})
// Pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/home/index.html',)
})
app.get('/templates', (req, res) => {
    res.sendFile(__dirname + '/public/pages/templates/index.html',)
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/pages/login/index.html',)
})
app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/pages/form/index.html',)
})
app.get('/preview', (req, res) => {
    res.sendFile(__dirname + '/public/pages/preview/index.html',)
})

// APIs
app.post('/login', (req, res) => {
    let body = req.body;
    res.json(body)
})
app.post('/form', (req, res) => {
    let body = req.body;
    console.log(body);
    res.json(body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})