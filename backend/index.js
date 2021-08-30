const express = require('express');
const cors = require('cors');

const routes = require('./apis/routes');

const app = new express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        msg: "toll plaza server running"
    })
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
});

app.use('/tollplaza', cors(), routes)

module.exports = app;