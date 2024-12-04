const mongoose = require('mongoose')
let formSchema = new mongoose.Schema({
    Name1: String,
    Name2: String,
    Name3: String,
    Name_of_Business: String,
    Tagline: String,
    additonalProduct: String,
    address: String,
    betterQuality: String,
    betterQualityImage: String,
    businessEmail: String,
    calendyLink: String,
    city: String,
    customerSupport: String,
    customerSupportImage: String,
    establishedYear: String,
    experience: String,
    experienceImage: String,
    facebookLink: String,
    instagramLink: String,
    linkedinLink: String,
    logo: String,
    mainImage: String,
    phone: String,
    product: String,
    testimonial1: String,
    testimonial2: String,
    testimonial3: String,
    theme: String,
    tiktokLink: String,
    xLink: String,
    yelpLink: String
})
let userSchema = new mongoose.Schema({
    email: String,
    password: String
})
const formModel = mongoose.model('formdatas', formSchema)
const userModel = mongoose.model('userdatas', userSchema)
module.exports = { formModel, userModel }

