import { Sequelize, Model, DataTypes } from "sequelize";

export interface Location {
  id: number,
  IATACode: string,
  name: string
}

export default (sequelize: Sequelize) => {
  class Location extends Model {
    static associate = function(models: any) {
      this.belongsTo(models.connection);
      this.belongsTo(models.city);
    };
  };

  Location.init({
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cityId: {
      field: "city_id",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IATACode: {
      field: "iata_code",
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      field: "name",
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "location",
    tableName: "location",
    timestamps: false,
    freezeTableName: true,
    version: true // optimistic locking
  });
  
  return Location;
};