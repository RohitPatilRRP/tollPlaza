const moment = require('moment');

const receipts = require('../../database/localdb');

const generateReceipt = async (req, res) => {
    const {
        vehicleRegNo,
        isReturn
    } = req.body;
    if (!vehicleRegNo || !isReturn) {
        return res.status(400).send({
            code: 400,
            msg: "Invalid input"
        })
    }
    let amount = 100;
    if (isReturn == "true") {
        amount = 200;
    }
    const timeStamp = new Date();
    const date = moment(timeStamp).format('DDMMYYYY');
    const time = moment(timeStamp).format('HH:mm:yy');
    const result = await receipts.insert({
        vehicleRegNo,
        isReturn,
        date,
        time,
        amount,
        issueDate:moment(timeStamp).format('DD/MM/YY hh:mm A')
    });
    return res.status(200).json(result);
}

const validateReceipt = async (req, res) => {
    const {
        receiptId
    } = req.body;
    const result = await receipts.findOne({ _id: receiptId });
    if (!result) return res.status(200).send({
        code: 404,
        msg: `Receipt not found`
    });
    const currDate = moment().format('DDMMYYYY');
    if (result.date == currDate && result.isReturn == "true") {
        return res.status(200).send({
            code: 200,
            msg: `Valid return receipt , id: ${receiptId}`
        });
    }
    return res.status(200).send({
        code: 401,
        msg: `Invalid return receipt , id: ${receiptId}`
    });
}

const findAllReceipts = async (req, res) => {
    const result = await receipts.find({});

    return res.status(200).send(result);
}

const deleteReceipts = async (req, res) => {
    await receipts.remove({});
    return res.status(200).send({
        code: 200,
        msg: "Deleted all receipts"
    })
}

module.exports = {
    generateReceipt,
    validateReceipt,
    findAllReceipts,
    deleteReceipts
}