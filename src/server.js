// server.js
const express = require('express');
const routes = require('./v1/routes');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const MongoAdapter = require('./adapters/mongo');
const mongoAdapter = MongoAdapter();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

routes(app);

const port = process.env.PORT || 8000;

function upServer() {
    mongoAdapter.connect()
        .then(() => {
            app.listen(port, () => {
                console.log(`Server is running at port: ${port}.`);
            });
        })
        .catch((err) => {
            process.exit(1);
        });
}

upServer();