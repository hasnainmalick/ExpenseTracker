const mongoose = require("mongoose");

// defining schema
const TransactionSchema = new mongoose.Schema({

    text:{
        type: String,
        trim: true,
        required:[true, 'please add some text']
    },
    amount:{
        type:Number,
        required:[true,"Please add positive or negative number"]
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
});
// creating model
module.exports = mongoose.model('Transaction', TransactionSchema)