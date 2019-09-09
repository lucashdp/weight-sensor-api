const SensorController = require('../resources/sensors/controller');
const sensorController = SensorController();

const {
    getByCode
} = sensorController;

module.exports = function (app) {
    //----------GET----------------------------//
    app.get('/v1/public/sensors/:code', (req, res) => {
        return getByCode(req, res);
    });
};