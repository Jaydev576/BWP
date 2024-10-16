const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/WebTree';
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error :', error);
    }
};

module.exports = connectDB;
