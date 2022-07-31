require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGO_CONNECTION_URL

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

module.exports = connect;