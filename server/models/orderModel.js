const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }, items: [{
    menuItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MenuItem',
      required: true
    }, quantity: {
      type: Number,
      default: 1
    }
  }], status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'In Progress', 'Delivered'],
    default: 'Pending'
  }, deliveryAddress: {
    type: String,
    required: true
  }, totalPrice: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)