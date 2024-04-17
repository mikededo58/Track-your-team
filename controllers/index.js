const router = require("express").Router();
const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboard-routes");
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use("/", dashboardRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
