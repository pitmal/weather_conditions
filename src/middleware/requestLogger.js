const requestLogger = (req, res, next) => {
    const fullPath = (req.baseUrl + req.url).replace('//', '/');
    console.log(`${new Date().toISOString()} ${req.method} ${fullPath}`);
    next();
};

module.exports = requestLogger;
