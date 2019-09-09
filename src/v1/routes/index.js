const sensorsRoutes = require('./sensors_routes');

module.exports = function (app) {
    sensorsRoutes(app);
};