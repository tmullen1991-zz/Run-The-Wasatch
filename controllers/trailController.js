const db = require("../models");
const axios = require("axios");
const apiKey = process.env.TRAIL_API_KEY;

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Trail.find({})
      .then(data => {
        res.json(data);
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
  },
  getTopTrails: function(req, res) {
    db.Trail.find({})
      .then(data => {
        var topArr = [];
        data.forEach(trail => {
          if (trail.stars >= 4.2 && trail.starVotes > 6) {
            topArr.push(trail.id);
          }
        });
        var ids= topArr.join(",")
        var url =
          "https://www.trailrunproject.com/data/get-trails-by-id?ids=" +
          ids +
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
      })
      .catch(err => {
        res.status(422).json(err);
      });
  }
};
