const { Match, } = require("../models");

const matchData = [

{
  match_date: "2024-04-02",
  home_team_id: 2,
  away_team_id: 1,
  winner: 1,
},
{
  match_date: "2024-03-28",
  home_team_id: 1,
  away_team_id: 2,
  winner: 2,
},
// {
//   match_date: "2024-03-28",
//   home_team_id: 1,
//   away_team_id: 2,
//   winner: 2,
// },
// {
//   match_date: "2024-03-28",
//   home_team_id: 1,
//   away_team_id: 2,
//   winner: 2,
// },
// {
//   match_date: "2024-03-28",
//   home_team_id: 1,
//   away_team_id: 2,
//   winner: 2,
// },
];

const seedMatch = () => Match.bulkCreate(matchData);

// const seedMatch = () =>
//   Match.create(
//     {
//       match_date: "10/24/23",
//       home_team_id: [
//         {
//           id: 1,
//         },
//       ],
//       away_team_id: [
//         {
//           id: 2,
//         },
//       ],
//     },
//     {
//       include: Team,
//     }
//   );

module.exports = seedMatch;
