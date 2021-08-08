const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    }, 
    Date: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model('User', UserSchema);