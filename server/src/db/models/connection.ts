import { Sequelize, Model, DataTypes } from "sequelize";

export interface Connection {
  id: number,
  itineraryId: number,
  originId: number,
  destionationId: number
}

export default (sequelize: Sequelize) => {
  class Connection extends Model {
    static associate = function(models: any) {
      this.belongsTo(models.itinerary);
      this.hasOne(models.location, {
        as: "origin",
        foreignKey: "originId"
      });
      this.hasOne(models.location, {
        as: "destination",
        foreignKey: "destinationId"
      });
      this.hasMany(models.segment);
    };
  };

  Connection.init({
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    itineraryId: {
      field: "itinerary_id",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    originId: {
      field: "origin_id",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    destinationId: {
      field: "destination_id",
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "connection",
    tableName: "connection",
    timestamps: false,
    freezeTableName: true,
    version: true // optimistic locking
  });
  
  return Connection;
};