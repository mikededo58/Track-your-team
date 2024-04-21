const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class League extends Model {}

League.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    league_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: 'User', key: 'id' },
    },
  },
  {
    sequelize,
    modelName: "league",
    underscored: true,
  }
);

module.exports = League;
