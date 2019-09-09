const SensorService = require('./service');
const sensorService = SensorService();

const SensorController = {
    getByCode
};

function getByCode(req, res) {
    const { code } = Object.assign({}, req.params);

    sensorService.getByCode({ code })
        .then((sensor) => {
            if (sensor === undefined)
                return res.status(404).send({ service: 'sensor', msg: 'Sensor not found !' }).end();
            else
                return res.status(201).send({ service: 'sensor', msg: 'Sensor found !', sensor }).end();
        })
        .catch((err) => {
            res.status(500).send({ service: 'sensor', msg: 'Server error.', err }).end();
        });
}

module.exports = function sensor() {
    return SensorController;
};