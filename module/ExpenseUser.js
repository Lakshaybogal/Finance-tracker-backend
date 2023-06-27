const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transactions = new Schema({
    transactionName : {
        type : String,
    },
    transactionAmt:{
        type : Number,
        required : true,
    }
},{ timestamps: true })

const UserSchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        unique: true,
        required : true,
    },
    password: {
        type: String,
        required : true,
    },
    balance :{
        type : Number,
    },
    earn :{
        type : Number,
    },
    spend :{
        type : Number,
    },
    transactions: [Transactions],

}, { timestamps: true });

const UserModel = mongoose.model('UserFinance', UserSchema);
module.exports = UserModel;
