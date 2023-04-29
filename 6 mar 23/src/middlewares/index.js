const authMiddleware = require('./auth');

module.exports = {
    // si fuera auth:auth se puede sólo poner auth y ya
    auth: authMiddleware
}