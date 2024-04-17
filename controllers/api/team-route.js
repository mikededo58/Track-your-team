const router = require("express").Router();
const sequelize = require("sequelize");
const { Team, Match, TeamMatch } = require("../../models");
const { apiGuard } = require("../../utils/authGuard");

router.get("/", async (req, res) => {
  try {
    const teamData = await Team.findAll({
      include: [{ model: Match, through: TeamMatch }],
    });
    const teams = teamData.map((team) => team.get({ plain: true }));
    //console.log("-----------------------------------");
    //render the "dashboard" template passing team names and session information
    res.render("dashboard", {
      teams: teams.map((team) => ({
        id: team.id,
        league_id: team.league_id,
        team_name: team.team_name,
      })),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:team_id", async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.team_id, {
      include: [{ model: Match, through: TeamMatch }],
    });

    const teams = teamData.get({ plain: true });
    res.render("teams", {
      teams: { team_name: team.team_name },
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// let gameWins = 0;
// for (const match of teamData.matches) {
//   if (match.winner === teamData.id) {
//     gameWins++;
//   }
// }
// console.log(teamData);

// const fullTeamData = {
//   id: teamData.id,
//   team_name: teamData.team_name,
//   league_id: teamData.league_id,
//   match_count: teamData.matches.length,
//   gameWins: gameWins,
// };
// if (teamData) {
//   res.status(200).json(fullTeamData);
// }
// if (!teamData) {
//   res.status(404).json({ message: "No Team found with that team id" });
//   return;
// }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.post("/", apiGuard, async (req, res) => {
  try {
    const newTeam = await Team.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newTeam);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
