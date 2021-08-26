const routes = require('express').Router();

const {
    generateReceipt,
    validateReceipt,
    findAllReceipts,
    deleteReceipts
} = require('../controller');

routes.post('/generateReceipt', generateReceipt);
routes.post('/validatereceipt', validateReceipt);
routes.get('/findAllreceipts', findAllReceipts);
routes.get('/deleteAllreceipts', deleteReceipts);

module.exports = routes;