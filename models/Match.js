const { Model, DataTypes, DATE } = require("sequelize");
const sequelize = require("../config/connection");

class Match extends Model {}

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    match_date: {
      type: DataTypes.DATE, 
      allowNull: false,
    },
    home_team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "teams", key: "id" },
    },
    away_team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "teams", key: "id" },
    },
    winner: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: "match",
    underscored: true,
  }
);

module.exports = Match;
