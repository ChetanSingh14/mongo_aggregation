const express = require('express');
const router = express.Router();
const managerController = require('../controllers/managerController');

// Routes for Student
router.post('/managers', managerController.createManager);

module.exports = router;