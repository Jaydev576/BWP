const { formModel } = require("../models/schema");

const getUser = async (req, res) => {
    let data = await formModel.findById(req.params.id)
    data['calendlyLink'] = data.calendyLink || process.env.C_LINK;
    // let data = {
    //     Name1: "Sarah P",
    //     Name2: "Jamie L",
    //     Name3: "Sam D",
    //     logo: "https://e7.pngegg.com/pngimages/766/380/png-clipart-black-cup-illustration-cafe-coffee-cup-tea-coffee-logo-coffee.png",
    //     Name_of_Business: "Fresh Bites Café",
    //     Tagline: "Savor the Freshness in Every Bite",
    //     mainImage: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/02/18123747/Untitled-design-2022-02-18T123717.280.jpg",
    //     betterQuality: "At Fresh Bites, we believe in using only the freshest ingredients, sourced directly from local farms. This not only ensures great taste but also supports our local community and farmers.",
    //     betterQualityImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS6Tt4aWmLRvAory4izNeRduSfLUIoLhnqUg&s",
    //     businessEmail: "hello@freshbites.com",
    //     customerSupport: "At Fresh Bites, we pride ourselves on offering exceptional customer service. Our friendly and attentive staff is always here to ensure your visit is enjoyable, whether you're dining in or grabbing takeout. Your satisfaction is our top priority.",
    //     customerSupportImage: "https://pikwizard.com/pw/medium/7446519e249303bc5d8a8577e07b08da.jpg",
    //     establishedYear: "2002",
    //     experience: "Our baristas are trained to craft the perfect cup of coffee, whether you prefer a classic espresso or something more adventurous. Every drink is made with love and expertise.",
    //     experienceImage: "https://www.telegraph.co.uk/multimedia/archive/02737/SL-coffee-17116_2737697c.jpg?imwidth=680",
    //     testimonial1: "Fresh Bites Café has become my go-to spot for healthy, delicious meals. Their salads are always fresh, and the cold-pressed juices are perfect for a quick energy boost. The atmosphere is warm and inviting, making it a great place to relax or catch up with friends. I also love that they prioritize local ingredients and eco-friendly practices—it really sets them apart. I can't recommend them enough!",
    //     testimonial2: "Fresh Bites Café is my favorite spot! The food is always fresh, flavorful, and made with local ingredients. The staff is friendly and welcoming, and the atmosphere is perfect for a relaxing coffee or lunch. I love their commitment to quality and the community. Highly recommend!",
    //     testimonial3: "Fresh Bites Café is a local gem! The cozy vibe and friendly staff make it feel like home. Their breakfast sandwiches and pastries are ideal for a quick bite, and the coffee is the best in town. They know regulars by name, creating a true community feel. It’s my go-to for a relaxing break!",
    //     product: "fresh, healthy, and delicious meals",
    //     additionalProduct: "cold-pressed juices & smoothies",
    //     phone: "+1 (310) 555-5678",
    //     address: "456 Healthy Street, Los Angeles, CA 90001",
    //     city: "the heart of Los Angeles",
    //     calendlyLink: "https://calendly.com/thehrshil/meet-for-wins",
    //     theme: "3",
    //     instagramLink: "",
    //     facebookLink: "",
    //     yelpLink: "",
    //     tiktokLink: "",
    //     xLink: "",
    //     linkedinLink: ""
    // }
    let themeNo = parseInt(data.theme);
    switch (themeNo) {
        case 1:
            return res.render('themes/theme1', data)
        case 2:
            return res.render('themes/theme2', data)
        case 3:
            return res.render('themes/theme3', data)
        case 4:
            return res.render('themes/theme4', data)
        default:
            return res.json({ 'Message': 'Nothing' })
    }
}

module.exports = getUser