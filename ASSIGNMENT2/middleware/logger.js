
const logger = (req, res, next) => {
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);
    console.log("Request Time:", new Date().toLocaleString());

    next();
};

module.exports = logger;