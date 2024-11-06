const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Sale = require('./models/Sale');
const Employee = require('./models/Employee');

const seedData = async () => {
  await connectDB();

  // Clear existing data
  await Sale.deleteMany({});
  await Employee.deleteMany({});

  // Seed sales data
  const salesData = [
    { region: 'North', amount: 150, date: new Date('2024-01-15') },
    { region: 'South', amount: 200, date: new Date('2024-01-16') },
    { region: 'East', amount: 120, date: new Date('2024-01-17') },
    { region: 'West', amount: 180, date: new Date('2024-01-18') },
  ];
  await Sale.insertMany(salesData);

  // Seed employees data
  const employeeData = [
    { name: 'Alice', managerId: null },
    { name: 'Bob', managerId: null },
    { name: 'Charlie', managerId: null },
    { name: 'David', managerId: null },
  ];
  await Employee.insertMany(employeeData);

  console.log('Database seeded successfully');
  mongoose.connection.close();
};

seedData();


