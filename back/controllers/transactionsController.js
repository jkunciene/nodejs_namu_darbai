const Transaction = require('../models/Transaction')
const asyncHandler = require('express-async-handler');

// @desc Get Transactions
// @route GET /api/transactions
// @access PRIVAT
const getTransactions = asyncHandler( async (req, res) => {
    const transactions = await Transaction.find({user: '6440daf34e68c6382519694e'});
    res.status(200).json(transactions);
});

// @desc Set transactions
// @route POST /api/transactions
// @access PRIVATE
const setTransactions = asyncHandler( async (req, res) => {
   
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field");
   }
   const transaction = await Transaction.create({
       text: req.body.text,
       amount: req.body.amount,
       user: req.body.user
   })
    res.status(200).json(transaction);
});

module.exports = {
    getTransactions,
    setTransactions
}