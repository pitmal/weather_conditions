const express = require('express');
const app = express();
const weatherRoutes = require('./weather/weather.routes');
const requestLogger = require('./middleware/requestLogger');
const mongoose = require('mongoose');

app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => {
    res.json({
        status: 'Server is runing',
        mongo: mongoose.connection.readyState === 1
    });
});

app.use('/api/weather', weatherRoutes);


app.use((req, res) => {
    res.status(404).json({ 
        status: 'error',
        message: 'Route not found' 
    });
});

module.exports = app;
