const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
const port = 3000

app.get('/api/login', (req, res) => {
    res.redirect('/login')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})