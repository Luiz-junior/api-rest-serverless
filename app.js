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

app.get('/users', (req, res) => routes.googleAuth.getUsers(req, res));
app.get('/user/:id', (req, res) => routes.googleAuth.getUser(req, res));
app.post('/user', jsonParser, (req, res) => routes.googleAuth.postUser(req, res));
app.put('/user/:id', jsonParser, (req, res) => routes.googleAuth.putUser(req, res));
app.delete('/user/:id', jsonParser, (req, res) => routes.googleAuth.deleteUser(req, res));


module.exports.handler = sls(app);