const router = require('express').Router();
const { Match, TeamMatch } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newMatch = await Match.create({
      match_date: req.body.date,
      home_team_id: parseInt(req.body.home_team_id),
      away_team_id: parseInt(req.body.away_team_id),
      home_team_name: req.body.home_team_name,
      away_team_name: req.body.away_team_name,
      winner: parseInt(req.body.winner),
    });
    console.log(newMatch);

    // console.log('-----------------------------');

    res.status(200).json(newMatch);
  } catch (err) {
    // console.log(newMatch);
    res.status(400).json(err);
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
