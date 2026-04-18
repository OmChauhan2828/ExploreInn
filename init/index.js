const mongoose = require('mongoose');
const data = require('./data.js');
const listing = require('../models/listing.js');

const mongo_URL = 'mongodb://127.0.0.1:27017/ExploreInn';

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


async function main() {
    await mongoose.connect(mongo_URL);
}

const initDB= async() => {
   await listing.deleteMany({});
   await listing.insertMany(data.data);
   console.log("Database initialized with sample data");
};   

initDB();