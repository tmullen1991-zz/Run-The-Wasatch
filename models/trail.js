const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    id: {type: Number, required: true},
    name: { type: String, required: true },
    type: { type: String, required: true },
    summary: { type: String, required: true },
    difficulty: { type: String, required: true },
    stars: { type: Number, required: true },
    starVotes: { type: Number, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true },
    imgMedium: {type: String, required: true},
    length: { type: Number, required: true },
    ascent: { type: Number, required: true },
    descent: { type: Number, required: true },
    high: { type: Number, required: true },
    low: { type: Number, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true }
  });

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;
