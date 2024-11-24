const mongoose = require('mongoose');
const User = require('./User')

const appointmentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    datetime: {type: Date, required: true},
    status: {type: String, enum: ['open', 'booked', 'completed'], required: true}
})

module.exports = mongoose.model('Appointment', appointmentSchema);