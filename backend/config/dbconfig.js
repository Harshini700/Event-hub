const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Directly hardcode your MongoDB URI here
        const mongoURI = 'mongodb://localhost:27017/eventhub'; // For local MongoDB
        // Or if you are using MongoDB Atlas
        // const mongoURI = 'mongodb+srv://username:password@cluster0.mongodb.net/eventManagement?retryWrites=true&w=majority';

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
