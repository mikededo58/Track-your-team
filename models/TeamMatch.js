const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class TeamMatch extends Model {}

TeamMatch.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   unique: true,
    //   autoIncrement: true,
    // },
    match_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "match",
        key: "id",
      },
    },
    team_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "team",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "teamMatch",
    underscored: true,
    freezeTableName: true,
  }
);

module.exports = TeamMatch;
