const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const MONGO_URL = process.env.MONGO_URL;
    try {
        // await mongoose.connect(MONGO_URL);
        await mongoose.connect('mongodb://localhost:27017/WebTree');
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error :', error);
    }
};

module.exports = connectDB;
