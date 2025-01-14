const mongoose = require('mongoose');

const controller = {
    async checkHealth(req, res) {
        try {
            const healthCheck = {
                uptime: process.uptime(),
                timestamp: new Date().toISOString(),
                status: 'OK',
                mongoStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
            };

            res.json(healthCheck);
        } catch (error) {
            res.status(503).json({
                status: 'ERROR',
                timestamp: new Date().toISOString(),
                error: error.message
            });
        }
    }
};

module.exports = controller;
