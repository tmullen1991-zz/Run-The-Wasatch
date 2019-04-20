const db = require("../models");
const axios = require("axios");
const apiKey = process.env.TRAIL_API_KEY;

// Defining methods for the booksController
module.exports = {
  findAll: function() {
    db.Trail.find({})
      .then(data => {
        //res.json(data);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },
  getTrailInfo: function(req, res) {
    var trailId = req.query.q;
    var url =
      "https://www.trailrunproject.com/data/get-trails-by-id?ids=" +
      trailId +
      "&key=" +
      apiKey;
    axios
      .get(url)
      .then(trailInfo => {
        res.json(trailInfo.data);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  }
};
