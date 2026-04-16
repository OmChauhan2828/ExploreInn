const mongoose = require('mongoose');
const schema = mongoose.Schema;

const listingSchema = new schema({
        title: {
            type: String,
            required: true
        },
        description: String,
        Image: {
            type: String,
            default: "https://unsplash.com/photos/a-canal-with-boats-and-trees-in-amsterdam-ZOlCi6m5ZUo",
            set: (v) => 
                v==""
            ? "https://unsplash.com/photos/a-canal-with-boats-and-trees-in-amsterdam-ZOlCi6m5ZUo"
            : v ,
        },
        price: Number,
        location: String,
        country: String,
});

const listing = mongoose.model('listing', listingSchema);
module.exports = listing;       