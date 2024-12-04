const express = require('express')
const router = express.Router();

const postLogin = require('../controllers/login')
const postForm = require('../controllers/form');
const getUser = require('../controllers/previewTheme');

var isLogIn, login = false;
let formSubmitted = false;
let previewData = []

// Middlewares
const goBackToLogin = (req, res, next) => {
    if (!login) {
        return res.redirect('/login')
    }
    return next()
}
router.use('/templates', goBackToLogin)
router.use('/form', goBackToLogin)
router.use('/preview', (req, res, next) => {
    if (login && formSubmitted) {
        return next()
    }
    else if (login && !formSubmitted)
        return res.redirect('/templates')
    else
        return res.redirect('/login')
})



// Routes
router.get('/', (req, res) => {
    isLogIn = login ? 'Log Out' : 'Log In';
    return res.render('home', { isLogIn })
})

router.get('/login', (req, res) => {
    isLogIn = '';
    return res.render('login', { isLogIn })
})
router.get('/templates', (req, res) => {
    isLogIn = login ? 'Log Out' : 'Log In';
    return res.render('templates', { isLogIn })
})
router.get('/preview', (req, res) => {
    console.log(previewData);
    isLogIn = login ? 'Log Out' : 'Log In';
    return res.render('preview', { previewData, isLogIn })
})
router.get('/form', (req, res) => {
    isLogIn = login ? 'Log Out' : 'Log In';
    return res.render('form', { isLogIn })
})
router.get('/user/:id', getUser)
router.get('/:slug', (req, res) => {
    //404 Page
    let slug = req.params.slug;
    isLogIn = ''
    return res.render('notFound', { slug, isLogIn })
})


// Post Requests
router.post('/login', async (req, res) => {
    let response = await postLogin(req, res, login)
    login = response.login;
    return res.json(response.response)
})
router.post('/form', async (req, res) => {
    let response = await postForm(req, res, formSubmitted, previewData)
    formSubmitted = response.formSubmitted;
    previewData = response.previewData;

    return res.json(response.response)
})
router.post('/logout', (req, res) => {
    login = false;
    res.send({ 'redirectUrl': '/' })
})

module.exports = router;