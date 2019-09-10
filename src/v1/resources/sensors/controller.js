const SensorService = require('./service');
const sensorService = SensorService();

const SensorController = {
    getByCode,
    update
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

function update(req, res) {
    const { params, body } = Object.assign({}, req);

    sensorService.update(params.code, body)
        .then(sensor => {
            if (!sensor)
                return res.status(400).send('Invalid sensor code.').end();

            res.status(200).send(sensor).end();
        })
        .catch(err => {
            res.status(500).send({ service: 'sensor', msg: 'Server error.', err }).end();
        });
}

module.exports = function sensor() {
    return SensorController;
};