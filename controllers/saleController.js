const Sale = require('../models/Sale');

// Total Sales by Region
exports.getTotalSalesByRegion = async (req, res) => {
  try {
    const totalSalesByRegion = await Sale.aggregate([
      { $group: { _id: "$region", totalAmount: { $sum: "$amount" } } },
    ]);
    res.status(200).json(totalSalesByRegion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Sales sorted by amount
exports.getSalesSortedByAmount = async (req, res) => {
  try {
    const sortedSales = await Sale.aggregate([
      { $sort: { amount: -1 } },
    ]);
    res.status(200).json(sortedSales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
