const SensorController = require('../resources/sensors/controller');
const sensorController = SensorController();

const {
    getByCode,
    update
} = sensorController;

module.exports = function (app) {
    //----------GET----------------------------//
    app.get('/v1/public/sensors/:code', (req, res) => {
        return getByCode(req, res);
    });
    //----------PUT----------------------------//
    app.put('/v1/public/sensors/:code', (req, res) => {
        return update(req, res);
    });
};