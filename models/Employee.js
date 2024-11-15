const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
