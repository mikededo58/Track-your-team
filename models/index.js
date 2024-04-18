const Match = require("./Match");
const League = require("./League");
const Team = require("./Team");
const TeamMatch = require("./TeamMatch");
const User = require("./User");
// const Result = require("./Result");

League.hasMany(Team, {
  foreignKey: "league_id",
});

Team.belongsTo(League, {
  foreignKey: "league_id",
});

Team.belongsToMany(Match, {
  through: TeamMatch,
  foreignKey: "team_id",
});

Match.belongsToMany(Team, {
  through: TeamMatch,
  foreignKey: "match_id",
});

Team.belongsTo(User,{
  foreignKey: 'teamId',
  onDelete: 'CASCADE',
})

Match.belongsTo(User,{
  foreignKey: 'matchId',
  onDelete: 'CASCADE',
})

module.exports = { Match, League, Team, TeamMatch, User };
