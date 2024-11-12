const Manager = require('../models/Manager');

// Create a new manager
exports.createManager = async (req, res) => {
  try {
    const manager = new Manager(req.body);
    await manager.save();
    res.status(201).json(manager);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
