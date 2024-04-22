const router = require('express').Router();
const { Match, Team, TeamMatch } = require('../models');
const {withoutGuard, withGuard} = require("../utils/authGuard")

router.get('/', async (req, res) => {
  try {
    const teamData = await Team.findAll({
      include: [{ model: Match, through: TeamMatch }],
    });
    const teams = teamData.map((team) => team.get({ plain: true }));

    res.render('team', {
      teams,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/team/new', withGuard, (req, res) => {
  try {
    res.render('newTeam', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // loggedIn: req.session.logged_in,
});


router.get('/team/:id', withGuard, async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.id, {
      include: [{ model: Match, through: TeamMatch }],
    });
    if (teamData) {
      const team = teamData.get({ plain: true });

      res.render('editTeam', { team, logged_in: req.session.logged_in, });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/league/new', withGuard, (req, res) => {
//   res.render('newLeague', {
//     dashboard: true,
//     loggedIn: req.session.logged_in,
//   });
// });

router.get('/match/new', withGuard, (req, res) => {
  try {
    res.render('newMatch', {logged_in: req.session.logged_in,});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', withoutGuard, (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', withoutGuard,(req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
