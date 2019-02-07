const sls = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const routes = require('./routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
    res.json({ response: "funfou" })
});

app.get('/users', (req, res) => routes.users.getUsers(req, res));
app.get('/user/:id', (req, res) => routes.users.getUser(req, res));
app.post('/user', jsonParser, (req, res) => routes.users.postUser(req, res));
app.put('/user/:id', jsonParser, (req, res) => routes.users.putUser(req, res));
app.delete('/user/:id', jsonParser, (req, res) => routes.users.deleteUser(req, res));


module.exports.handler = sls(app);