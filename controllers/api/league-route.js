const router = require("express").Router();
const { League } = require("../../models");


router.post("/", async (req, res) => {
  const league =req.body
  try {
    const newLeague = await League.create({ ...league});

    res.json(newLeague);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
