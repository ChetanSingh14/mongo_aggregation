const express = require('express');
const { getTotalSalesByRegion, getSalesSortedByAmount } = require('../controllers/SaleController');
const router = express.Router();

router.get('/total-sales-by-region', getTotalSalesByRegion);
router.get('/sales-sorted-by-amount', getSalesSortedByAmount);

module.exports = router;
