const MongoAdapter = require('../../../adapters/mongo');
const mongoAdapter = MongoAdapter();

const SensorService = {
    getByCode,
    update
};

function getByCode(query) {
    console.log('Find one modality.');

    return new Promise((resolve, reject) => {
        try {
            if (!query) {
                throw new Error('Empty query.');
            }
            const workedQuery = Object.assign({}, query);

            return mongoAdapter.getState().collection('sensors')
                .findOne(workedQuery, (err, doc) => {
                    if (err) {
                        console.log(err.message);
                        return reject(new InfrastructureError(err));
                    }
                    return resolve(doc);
                });
        } catch (err) {
            console.log(err.message);
            return reject(err);
        }
    });
}

function update(code, sensorData) {
    console.log('Updating sensor.');

    return new Promise((resolve, reject) => {
        try {
            delete sensorData._id;
            const sensorsCollection = mongoAdapter.getState().collection('sensors');

            sensorsCollection
                .findOneAndUpdate({ code }, { $set: sensorData }, { returnOriginal: false })
                .then(sensor => resolve(sensor.value))
                .catch(err => {
                    console.log('edit ' + err.message);
                    return reject(err);
                });
        } catch (err) {
            console.log('edit ' + err.message);
            return reject(err); 
        }
    });
}

module.exports = function sensor() {
    return SensorService;
};