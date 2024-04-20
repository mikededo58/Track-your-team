const router = require('express').Router();
const { Team } = require('../../models');
const { apiGuard } = require('../../utils/authGuard');

router.post('/', apiGuard, async (req, res) => {
  try {
    const newTeam = await Team.create({
      userId: req.session.user_id,
      team_name: req.body.team_name,
      league_id: parseInt(req.body.league_id),
    });

    res.status(200).json(newTeam);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
router.put('/:id', async (req, res) => {
  try {
    const [affectedRows] = await Team.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const [affectedRows] = Team.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
