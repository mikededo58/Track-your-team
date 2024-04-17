const router = require("express").Router();
const { Match, Team, TeamMatch, } = require("../models");
const { withGuard } = require("../utils/authGuard");



router.get("/", withGuard, async (req, res) => {
  try {
    const teamData = await Team.findAll({
      include: [{ model: Match, through: TeamMatch }],
    });
    const teams = teamData.map((team) => team.get({ plain: true }));
    res.render("team", {
      teams,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/team/new', withGuard, (req, res) => {
  res.render('newTeam', {
    dashboard: true,
    loggedIn: req.session.logged_in,
  });
});

router.get("/edit/:id", withGuard, async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.team_id, {
      include: [{ model: Match, through: TeamMatch }],
    });

    const team = teamData.get({ plain: true });
    res.render("editTeam", {
      dashboard: true,
      team,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
