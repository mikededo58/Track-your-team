const router = require("express").Router();
const { Match, Team, League, TeamMatch, User } = require("../models");
const { withGuard, withoutGuard } = require("../utils/authGuard");

router.get("/", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/dashboard");
      console.log(`Hit the if statement`);
      return;
    }

    res.render("signIn");
    // console.log(`Hit the login`);
  } catch (err) {
    res.status(500).json({ message: `Hit the error` });
  }
});

router.get("/dashboard",  async (req, res) => {
  try {
    const teamData = await Team.findAll({
      include: [{ model: Match, through: TeamMatch }],
    });
    const teams = teamData.map((team) => team.get({ plain: true }));
    res.render("dashboard", {
      teams,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/dashboard", async (req, res) => {
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

router.put("/:id", async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
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

router.get("/team/:id", withGuard, async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.team_id, {
      include: [{ model: Match, through: TeamMatch }],
    });

    const teamsID = teamData.get({ plain: true });
    res.render("teams", {
      teamsID,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
