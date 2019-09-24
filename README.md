# weight-sensor-api
This is a API to PUT and GET sensors data, providing two endpoints for use in a kind of beer scale, explained in this project: **[medidor-peso-cerveja](https://github.com/bylucasxdx/medidor-peso-cerveja)**. The reason for this API is a postgraduate work in Software Architecture at PUC MINAS, in the field of Internet of Things.

## Database
This API connect with a mongoDB.
Your connection string is: <code>mongodb://lucashdp:trabalho-iot@cluster0-shard-00-00-imodu.mongodb.net:27017,cluster0-shard-00-01-imodu.mongodb.net:27017,cluster0-shard-00-02-imodu.mongodb.net:27017/iotpuc?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority</code>

## Endpoints

#### Sensors Resources

##### GET REGION
- **[<code>GET</code> v1/public/sensors/:code](https://github.com/lucashdp/weight-sensor-api/blob/master/docs/sensors/GET_SENSOR_BY_CODE.md)**

##### PUT REGION
- **[<code>PUT</code> v1/public/sensors/:code](https://github.com/lucashdp/weight-sensor-api/blob/master/docs/sensors/PUT_SENSOR.md)**


## Pre-Requisites

- NodeJS is a pre requisite.

## Install and Run this app

- Clone the project:
    git clone https://github.com/lucashdp/weight-sensor-api

- Execute the command line (install dependences):
    npm install

- Run the command line (run the app):
    npm start