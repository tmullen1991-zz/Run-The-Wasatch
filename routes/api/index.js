const router = require("express").Router();
const trailRoutes = require("./trails");

// Book routes
router.use(trailRoutes);

module.exports = router;