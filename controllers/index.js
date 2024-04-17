const router = require("express").Router();
const apiRoutes = require("./api");
const teamRoutes = require("./teamRoutes");
const matchRoutes = require('./matchRoutes');

router.use('/', teamRoutes);
router.use("/match", matchRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
