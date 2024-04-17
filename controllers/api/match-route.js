const router = require("express").Router();
const { Match, Team, League, TeamMatch } = require("../../models");
const { withGuard, apiGuard } = require("../../utils/authGuard");

// router.get("/",  withAuth, async (req, res) => {
//   try {
//     const gameData = await Match.findAll();
//     res.status(200).json(gameData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/:match_id", withAuth, async (req, res) => {
//   try {
//     const gameData = await Match.findByPk(req.params.match_id);
//     if (!gameData) {
//       res.status(404).json({ message: "Match found with that id" });
//       return;
//     }
//     res.status(200).json(gameData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post("/", apiGuard, async (req, res) => {
  try {
    const matchData = await Match.create(req.body);
    const association1 = {
      match_id: matchData.id,
      team_id: req.body.home_team_id,
    };

    console.log(association1);
    const association2 = {
      match_id: matchData.id,
      team_id: req.body.away_team_id,
    };
    const homeTeam = await TeamMatch.create(association1);
    const awayTeam = await TeamMatch.create(association2);
    res.status(200).json(matchData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
