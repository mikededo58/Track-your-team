const router = require("express").Router();
const leagueRoutes = require("./league-route");
const teamRoutes = require("./team-route");
const matchRoutes = require("./match-route");
const userRoutes = require("./user-routes");

router.use("/league", leagueRoutes);
router.use("/team", teamRoutes);
router.use("/match", matchRoutes);
router.use("/user", userRoutes);
// router.use("/result", resultsRoutes);

module.exports = router;
