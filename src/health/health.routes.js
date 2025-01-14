const express = require('express');
const router = express.Router();
const controller = require('./health.controller');
const requestLogger = require('../middleware/requestLogger');

router.use(requestLogger);

// Health check endpoint
router.get('/', controller.checkHealth);

module.exports = router;
