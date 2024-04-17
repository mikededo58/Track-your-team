const router = require("express").Router();
const { Team, League } = require("../../models");
const { apiGuard } = require("../../utils/authGuard");

// router.get("/", withAuth, async (req, res) => {
//   try {
//     const leagueData = await League.findAll({
//       include: [{ model: Team }],
//     });
//     res.status(200).json(leagueData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post("/", apiGuard, async (req, res) => {
  try {
    const leagueData = await League.create(req.body);
    res.status(200).json(leagueData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
