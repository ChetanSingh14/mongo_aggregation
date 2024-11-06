const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  region: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Sale = mongoose.model('Sale', saleSchema);
module.exports = Sale;
