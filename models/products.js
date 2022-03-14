const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pName:  { type: String, required: true },
    pDescription:  { type: String, required: true },
    pImg:  { type: String},
    pPrice: { type: Number, required: true, min : 0},
    pQty: { type: Number, required: true , min : 0, default : 1},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;