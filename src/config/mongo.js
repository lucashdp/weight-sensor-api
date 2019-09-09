const exportConfig = require('export-config');

const MongoConfig = {
  default: {
    URI: process.env.MONGO_ADDRESS || 'mongodb://lucashdp:trabalho-iot@cluster0-shard-00-00-imodu.mongodb.net:27017,cluster0-shard-00-01-imodu.mongodb.net:27017,cluster0-shard-00-02-imodu.mongodb.net:27017/iotpuc?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
  },
  development: {
    URI: process.env.MONGO_ADDRESS || 'mongodb://lucashdp:trabalho-iot@cluster0-shard-00-00-imodu.mongodb.net:27017,cluster0-shard-00-01-imodu.mongodb.net:27017,cluster0-shard-00-02-imodu.mongodb.net:27017/iotpuc?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
  },
  required: ['URI']
};

module.exports = exportConfig(MongoConfig);