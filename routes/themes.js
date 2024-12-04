const express = require('express')
const router = express.Router();

let data = {
    "Name1": "John Doe",
    "Name2": "Michael Johnson",
    "Name3": "Emily Davis",
    "Name_of_Business": "WebTree",
    "Tagline": "Your One-Stop Shop for a Sparkling Ride",
    "address": "123 Main Street, San Jose, CA 12345",
    "betterQuality": "Our commitment to quality is unwavering. We utilize advanced techniques and premium products to deliver a flawless car wash experience. From gentle hand washes to powerful machine cleaning, we ensure your vehicle receives the care it deserves",
    "betterQualityImage": "/utilities/templateThemeData/Whyus_1.jpg",
    "businessEmail": "greatcarwash@gmail.com",
    "city": "San Jose",
    "customerSupport": "Our dedicated customer support team is always ready to assist you. Whether you have questions about our services, need help scheduling an appointment, or want to provide feedback, we're here to help",
    "customerSupportImage": "/utilities/templateThemeData/Whyus_2.jpg",
    "establishedYear": "2002",
    "experience": "With over 22 years of industry expertise, we've perfected the art of car care. Our skilled technicians are passionate about delivering exceptional results, leaving your car looking its best",
    "experienceImage": "/utilities/templateThemeData/Whyus_3.jpg",
    "facebookLink": "https://www.facebook.com/CustomEarth",
    "instagramLink": "https://www.instagram.com/kross_town_carwash",
    "linkedinLink": "https://www.linkedin.com/company/custom-earth-promos",
    "logo": "/utilities/templateThemeData/logo.jpg",
    "mainImage": "/utilities/templateThemeData/mainImage.webp",
    "phone": "555-5555",
    "product": "Car Washing Services",
    "testimonial1": "I've been taking my car to WebTree Car Wash for years, and I've always been impressed with their exceptional service. The staff is friendly, knowledgeable, and always goes the extra mile to ensure my car is spotless. Their attention to detail is unmatched, and I'm always thrilled with the results. I highly recommend WebTree to anyone looking for a top-notch car wash experience",
    "testimonial2": "As a busy professional, I don't have a lot of time to spend on car care. WebTree Car Wash has been a lifesaver! Their convenient location and efficient service make it easy to keep my car looking its best. I'm particularly impressed with their interior detailing, which always leaves my car feeling fresh and clean",
    "testimonial3": "I've tried other car washes in the area, but WebTree Car Wash is by far the best. They offer a wide range of services, from basic washes to full detailing. The staff is always friendly and professional, and the prices are reasonable. I'm a loyal customer and wouldn't go anywhere else",
    "tiktokLink": "iiiiiiiiiiiii",
    "xLink": "https://x.com/carisma_carwash",
    "yelpLink": "https://www.yelp.com/biz/express-shine-mobile-auto-detailing-hayward",
    "additionalProduct": "Detailing, Waxing, Polishing, Ceramic Coating, Paint Protection Film",
    "calendlyLink": "https://calendly.com/thehrshil/meet-for-wins"
}

router.get('/theme1', (req, res) => {
    return res.render('themes/theme1', data)
})
router.get('/theme2', (req, res) => {
    return res.render('themes/theme2', data)
})
router.get('/theme3', (req, res) => {
    return res.render('themes/theme3', data)
})
router.get('/theme4', (req, res) => {
    return res.render('themes/theme4', data)
})

module.exports = router;