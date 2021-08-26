const express = require('express');

const routes = require('./apis/routes');

const app = new express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        msg: "toll plaza server running"
    })
});

app.use('/tollplaza', routes)

module.exports = app;