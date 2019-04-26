const mongoose = require("mongoose");
const db = require("../models");
const axios = require("axios");
const list = require("./trail-db-info.json");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/runthewasatchDB",
  { useNewUrlParser: true }
);

db.Trail.remove({})
  .then(() => db.Trail.insertMany(list))
  .then(() => {
    console.log("db Created");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// use with trail-ids.json to get info from trail project api, 50 trails max returned per call

/*const idList = require("./trail-ids.json")
axios.get("https://www.trailrunproject.com/data/get-trails-by-id?ids=" +
  idList.a9.join(",") +
  "&key=200448805-18ee42197f8daea8ab7691b916457246").then(res => {
    db.Trail.collection
      .insertMany(res.data.trails)
      .then(() => {
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
var fs = require('fs');
db.Trail.find({})
  .then(data => {
   
    var newList = [];
    data.forEach(obj => {
      trails = {
        id: obj.id,
        name: obj.name,
        type: obj.type,
        summary: obj.summary,
        stars: obj.stars,
        starVotes: obj.starVotes,
        difficulty: obj.difficulty,
        location: obj.location,
        url: obj.url,
        imgMedium: (!obj.imgMedium)?"https://via.placeholder.com/400/000000/FFFFFF/?text=Image%20Unavailable":obj.imgMedium,
        length: obj.length,
        ascent: obj.ascent,
        descent: obj.descent,
        high: obj.high,
        low: obj.low,
        longitude: obj.longitude,
        latitude: obj.latitude
      };
      newList.push(trails);
      if(newList.length === 422){
        var insert1 = JSON.stringify(newList);
        fs.writeFile("./trail-db-info.json", insert1, err => {
          console.log("done")
          if (err) {
            console.log(err);
          }
        });
      }
    });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  
*/
