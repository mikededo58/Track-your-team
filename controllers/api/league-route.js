const router = require("express").Router();
const { League } = require("../../models");
const { apiGuard } = require("../../utils/authGuard");


router.post("/", apiGuard, async (req, res) => {
  const league =req.body
  try {
    const newLeague = await League.create({ ...league, 
      userId: req.session.user_id});

    res.json(newLeague);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
