const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phoneNumber: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    password: {type: String, required: true},
    status: {type: String, enum: ['patient', 'pharmacist'], required: true}
})

module.exports = mongoose.model('User', userSchema);