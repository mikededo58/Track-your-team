const { Match, } = require("../models");

const matchData = [

{
  match_date: "2024-04-02",
  home_team_id: 2,
  away_team_id: 1,
  home_team_name:"Squirrels",
  away_team_name:"Wombats",
  winner: "Squirrels",
},
{
  match_date: "2024-04-02",
  home_team_id: 3,
  away_team_id: 4,
  home_team_name:"Panda",
  away_team_name:"Colts",
  winner: "Colts",
},
{
  match_date: "2024-04-02",
  home_team_id: 2,
  away_team_id: 3,
  home_team_name:"Pigeons",
  away_team_name:"Seagulls",
  winner: "Seagulls",
},
{
  match_date: "2024-04-02",
  home_team_id: 5,
  away_team_id: 6,
  home_team_name:"Squirrels",
  away_team_name:"Wombats",
  winner: "Squirrels",
},
{
  match_date: "2024-04-02",
  home_team_id: 7,
  away_team_id: 8,
  home_team_name:"Orcas",
  away_team_name:"Elephants",
  winner: "Elephants",
},
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
