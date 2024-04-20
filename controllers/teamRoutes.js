const router = require('express').Router();
const { Match, Team, TeamMatch } = require('../models');

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

router.get('/team/new', (req, res) => {
  try {
    res.render('newTeam');
  } catch (err) {
    res.status(500).json(err);
  }
  // loggedIn: req.session.logged_in,
});

router.get('/team/:id', (req, res) => {
  try {
    res.render('editTeam');
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/team/:id', async (req, res) => {
//   try {
//     const teamData = await Team.findByPk(req.params.team_id, {
//       include: [{ model: Match, through: TeamMatch }],
//     });

//     if (teamData) {
//       const team = teamData.get({ plain: true });

//       res.render('team', { team });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/league/new', withGuard, (req, res) => {
//   res.render('newLeague', {
//     dashboard: true,
//     loggedIn: req.session.logged_in,
//   });
// });

router.get('/match/new', (req, res) => {
  try {
    res.render('newMatch');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
