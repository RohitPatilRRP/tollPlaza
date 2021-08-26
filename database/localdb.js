const db = require('node-localdb');
const path = require('path');

const dirPath = path.join(__dirname, '/records/reciept.json');
const receipts = db(dirPath);

module.exports = receipts