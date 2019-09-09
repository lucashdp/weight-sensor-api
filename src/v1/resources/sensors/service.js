const MongoAdapter = require('../../../adapters/mongo');
const mongoAdapter = MongoAdapter();

const SensorService = {
    getByCode
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

module.exports = function sensor() {
    return SensorService;
};