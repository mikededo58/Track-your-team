const { League } = require("../models");

const leagueData = [
  {
    id: 1,
    league_name: "League1",
  },
];

const seedLeague = () => League.bulkCreate(leagueData);

module.exports = seedLeague;
