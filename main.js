const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
const port = 3000


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
app.get('/nav', (req, res) => {
    res.sendFile(__dirname + '/public/pages/navbar/index.html',)
})

app.get('/theme/theme1', (req, res) => {
    res.sendFile(__dirname + '/public/themes/theme_1/index.html',)
})


// apis
app.get('/api/login', (req, res) => {
    console.log('Hey');
    res.redirect('/login')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})