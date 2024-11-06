require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const saleRoutes = require('./routes/saleRoutes');
const employeeRoutes = require('./routes/employeeRoutes.js');


// Initialize express and connect to DB
const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', studentRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/employees', employeeRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
