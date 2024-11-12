const Employee = require('../models/Employee');
const mongoose = require('mongoose');
const Manager = require('../models/Manager');

// Find employees under a specific manager
exports.getEmployeesUnderManager = async (req, res) => {
  try {
    const managerId = req.params.managerId;

    // Ensure managerId is a valid ObjectId string
    if (!mongoose.Types.ObjectId.isValid(managerId)) {
      return res.status(400).json({ message: "Invalid manager ID format." });
    }

    // Use the new keyword to create an ObjectId
    const employeesUnderManager = await Employee.aggregate([
      { $match: { managerId: new mongoose.Types.ObjectId(managerId) } },
    ]);

    // await Manager.populate(employeesUnderManager, {path:"managerId"})
    

    // Return the list of employees or a message if none are found
    if (employeesUnderManager.length === 0) {
      return res.status(404).json({ message: "No employees found under this manager." });
    }

    res.status(200).json(employeesUnderManager);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Employee hierarchy using $graphLookup
exports.getEmployeeHierarchy = async (req, res) => {
  try {
    const hierarchy = await Employee.aggregate([
      {
        $graphLookup: {
          from: "employees",
          startWith: "$_id",
          connectFromField: "_id",
          connectToField: "managerId",
          as: "subordinates",
        },
      },
    ]);
    res.status(200).json(hierarchy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
