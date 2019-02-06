const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require('./config/database');
const User = require("./models/data");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ response: "funfou" })
});

app.get('/users', (req, res) => {
    User.find({})
        .then(data => res.send(data))
        .catch(err => res.send(err))
});

app.get('/user/:id', (req, res) => {
    User.find({ _id: req.params.id })
        .then(data => res.send(data))
        .catch(err => res.send(err))
});

app.post("/user", bodyParser.json(), (req, res) => {
    const { name, age } = req.body;

    User.create({ name, age })
        .then(data => res.status(200).send(data))
        .catch(err => res.send("Error occured"));
});

app.put('/user/:id', bodyParser.json(), (req, res) => {
    const { name, age } = req.body;

    User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(data => res.send(data))
        .catch(err => res.send(err));
});

app.delete("/user/:id", (req, res) => {
    User.findByIdAndRemove({ _id: req.params.id })
        .then(data => res.send('Deleted!'))
        .catch(err => res.send("Error Occured "));
});

module.exports.handler = serverless(app);