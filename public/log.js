module.exports = (req, res, next) => {
        req.on('end', () => {
            let newLog = (`[${new Date().toISOString()} ${req.ip}] ${req.originalUrl} status:${res.statusCode}`);
            console.log(newLog);
        });
        next();
};