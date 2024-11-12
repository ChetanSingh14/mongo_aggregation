const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
  name: { type: String, required: true },
},{timestamps:true});

module.exports = mongoose.model('Manager', managerSchema);
