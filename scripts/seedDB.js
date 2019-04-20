const mongoose = require("mongoose");
const db = require("../models");
const axios = require("axios");
const list = require("./trail-db-info.json");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/runthewasatchDB",
  { useNewUrlParser: true }
);

db.Trail.insertMany(list)
  .then(() => {
    console.log("db Created");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// use with trail-ids.json to get info from trail project api
/*axios.get("https://www.trailrunproject.com/data/get-trails-by-id?ids=" +
  list.a9.join(",") +
  "&key=200448805-18ee42197f8daea8ab7691b916457246").then(res => {
    db.Trail.collection
      .insertMany(res.data.trails)
      .then(data => {
        console.log("inserted");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  });*/

// after db is created use this to create the json for DB on deploy
/*
db.Trail.find({})
  .then(data => {
    var newList = [];
    data.forEach(obj => {
      trails = {
        id: obj.id,
        name: obj.name,
        type: obj.type,
        summary: obj.summary,
        difficulty: obj.difficulty,
        location: obj.location,
        url: obj.url,
        length: obj.length,
        ascent: obj.ascent,
        descent: obj.descent,
        high: obj.high,
        low: obj.low,
        longitude: obj.longitude,
        latitude: obj.latitude
      };
      newList.push(trails);
      if(newList.length === 421){
        var insert1 = JSON.stringify(newList);
        fs.writeFile("./trail-db-info.json", insert1, err => {
          console.log("done")
          if (err) {
            console.log(err);
          }
        });
      }
    });
    process.exit(0)
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  */
