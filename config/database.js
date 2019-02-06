const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://admin:admin123@ds135233.mlab.com:35233/rest-api-serverless")

module.exports = db;