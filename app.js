const  express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const path = require('path');

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send("Hii I am root");
});


app.get('/listings', async (req, res) => {
  const alllistings = await Listing.find({});
  res.render("/listings/index.ejs", { listings: alllistings });
});

// app.get("/testListing" , async(req,res) => {
//    let samplelisting = new Listing( {
//     title:"My new Villa",
//     description:"This is a beautiful villa located bank of river.",
//     price: 5000,
//     location: "Rishikesh",
//     country: "India"
//     });
//     await samplelisting.save();
//     console.log("sample listing saved to database");
//     res.send(samplelisting);
// });

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})