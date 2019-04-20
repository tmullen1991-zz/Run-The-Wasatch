import axios from "axios";

export default {
  // change home to any extension, use whatever is used on front end for page redirect, also change home in routes/api/trails.js
  getTrails: function() {
    return axios.get("/api/home");
  },
  // use Trail Project trailId, not database id
  getTrailInfo: function(trailId) {
    return axios.get("api/trail_info", { params: { q: trailId } });
  }
};
