const express = require("express");
const bodyParser = require("body-parser");

require('../config/database');
const User = require("../models/data");

module.exports = {
    getUsers(req, res) {
        User.find({})
            .then(data => res.send(data))
            .catch(err => res.send(err));
    },
    getUser(req, res) {
        User.find({ _id: req.params.id })
            .then(data => res.send(data))
            .catch(err => res.send(err));
    },
    postUser(req, res) {
        const { name, age } = req.body;

        User.create({ name, age })
            .then(data => res.status(200).send(data))
            .catch(err => res.send("Error occured"));
    },
    putUser(req, res) {
        User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(data => res.send(data))
            .catch(err => res.send(err));
    },
    deleteUser(req, res) {
        User.findByIdAndRemove({ _id: req.params.id })
            .then(data => res.json({ response: "deleted"}))
            .catch(err => res.send("Error Occured "));
    }
};
