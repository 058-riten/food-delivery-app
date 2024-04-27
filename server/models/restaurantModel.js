const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, cuisine: {
        type: String,
        required: true
    }, address: {
        type: String,
        required: true
    },
    openingHours: { type: String },
    contactInfo: { type: String },
})

module.exports = mongoose.model('Restaurant', restaurantSchema)