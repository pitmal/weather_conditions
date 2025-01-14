require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
