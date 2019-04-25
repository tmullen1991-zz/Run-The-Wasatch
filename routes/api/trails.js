const router = require("express").Router();
const trailController = require("../../controllers/trailController");

// change home to any extension, use whatever is used on front end for page redirect, also change home in client/src/utils/api.js
router.route("/map").get(trailController.findAll);

router.route("/trail_info").get(trailController.getTrailInfo);

router.route("/top_trails").get(trailController.getTopTrails);

module.exports = router;
