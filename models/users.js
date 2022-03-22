const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:  { type: String, required: true },
    shopCart:  [{
        itemName: String,
        price: Number,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.'],
            deafult: 1
        },    
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;