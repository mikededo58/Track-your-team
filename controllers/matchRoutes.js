const router = require("express").Router();
const { Match, Team, League, TeamMatch, User } = require("../models");
const { withGuard, withoutGuard } = require("../utils/authGuard");

router.get("/", async (req, res) => {
  try {
    const matchData = await Match.findAll({
      include: [{ model: Team, through: TeamMatch }],
    });
    const matches = matchData.map((match) => match.get({ plain: true }));
    res.render("match", {
      matches,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/match/new', withGuard, (req, res) => {
  res.render('newMatch', {
    dashboard: true,
    loggedIn: req.session.logged_in,
  });
});

router.get('/login', withoutGuard, (req, res) => {
    try {
      res.render('login');
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/signup', withoutGuard, (req, res) => {
    try {
      res.render('signup');
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
