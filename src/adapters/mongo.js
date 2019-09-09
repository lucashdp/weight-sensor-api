const MongoClient = require('mongodb').MongoClient;
const config = require('../config/mongo');

const { URI } = config;
const MongoAdapter = {
    connect,
    getState
};

const state = {
    db: null
};

function connect() {
    return new Promise((resolve, reject) => {
        if (state.db) {
            return resolve();
        }

        return MongoClient.connect(URI, (err, db) => {
            if (err)
                return reject();

            state.db = db;
            return resolve();
        });
    });
}

function getState() {
    return state.db;
}

module.exports = function factory() {
    return MongoAdapter;
};