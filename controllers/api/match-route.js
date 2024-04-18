const router = require('express').Router();
const { Match, TeamMatch } = require('../../models');
const { apiGuard } = require('../../utils/authGuard');

router.post('/', apiGuard, async (req, res) => {
  const body = req.body;

  try {
    const newMatch = await Match.create({
      ...body,
      userId: req.session.user_id,
    });
    res.json(newMatch);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/", apiGuard, async (req, res) => {
//   try {
//     const matchData = await Match.create(req.body);
//     const association1 = {
//       match_id: matchData.id,
//       team_id: req.body.home_team_id,
//     };

//     console.log(association1);
//     const association2 = {
//       match_id: matchData.id,
//       team_id: req.body.away_team_id,
//     };
//     const homeTeam = await TeamMatch.create(association1);
//     const awayTeam = await TeamMatch.create(association2);
//     res.status(200).json(matchData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;
