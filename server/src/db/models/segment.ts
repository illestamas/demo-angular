import { Sequelize, Model, DataTypes } from "sequelize";

export interface Segment {
  id: number,
  itineraryId: number,
  originId: number,
  destionationId: number
}

export default (sequelize: Sequelize) => {
  class Segment extends Model {
    static associate = function(models: any) {
      this.belongsTo(models.connection);
    };
  };

  Segment.init({
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    connectionId: {
      field: "connection_id",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      field: "type",
      type: DataTypes.ENUM(
        "LOCAL"
      ),
      allowNull: false
    },
    informational: {
      field: "informational",
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    departFromId: {
      field: "depart_from_id",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arriveToId: {
      field: "arrive_to_id",
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "segment",
    tableName: "segment",
    timestamps: false,
    freezeTableName: true,
    version: true // optimistic locking
  });
  
  return Segment;
};