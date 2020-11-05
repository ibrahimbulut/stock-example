const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const stockSchema = new Schema({
    product_id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
});

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;
