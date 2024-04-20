const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    league_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'leagues', key: 'id' },
    },
    games_played: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    games_won: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: 'User', key: 'id' },
    },
  },
  {
    sequelize,
    modelName: 'team',
    underscored: true,
  }
);

module.exports = Team;
