const express = require('express');
const { getEmployeesUnderManager, getEmployeeHierarchy } = require('../controllers/employeeController');
const router = express.Router();

router.get('/under-manager/:managerId', getEmployeesUnderManager);
router.get('/hierarchy', getEmployeeHierarchy);

module.exports = router;
