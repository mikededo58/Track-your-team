const { TeamMatch } = require("../models");

console.log("------------------------------------------------------------------")
console.log(TeamMatch)
const teamMatchData = [
  {
    match_id: 1,
    team_id: 1,
  },
  {
    match_id: 1,
    team_id: 2,
  },
  {
    match_id: 2,
    team_id: 1,
  },
  {
    match_id: 2,
    team_id: 2,
  },
//   {
//     match_id: 3,
//     team_id: 1,
//   },
//   {
//     match_id: 3,
//     team_id: 2,
//   },
//   {
//     match_id: 4,
//     team_id: 1,
//   },
//   {
//     match_id: 4,
//     team_id: 2,
//   },
//   {
//     match_id: 5,
//     team_id: 1,
//   },
//   {
//     match_id: 5,
//     team_id: 2,
//   },
];

const seedteamMatch = () => TeamMatch.bulkCreate(teamMatchData);

module.exports = seedteamMatch;
