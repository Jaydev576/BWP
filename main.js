// Importing Modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Routes
const pageRouter = require('./routes/pages')
const themeRouter = require('./routes/themes')
require('dotenv').config();

// Create Connection to Database
const connectDB = require('./models/connect');
connectDB()

const app = express()

const port = process.env.PORT
app.use(express.static('./views'))
app.use(bodyParser.json())
app.use(cors())
app.set('view engine', 'ejs');
app.set('views', './views')

// Routes
app.use('/preview', themeRouter)
app.use('/', pageRouter)

app.listen(port, () => { console.log(`Server running on port : ${port}`) })