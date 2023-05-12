import { Sequelize, Model, DataTypes } from "sequelize";

export interface City {
  id: number,
  countryId: number,
  IATACode: string,
  name: string
}

export default (sequelize: Sequelize) => {
  class City extends Model {
    static associate = function(models: any) {
      this.hasMany(models.location);
      this.belongsTo(models.country);
    };
  };

  City.init({
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    countryId: {
      field: "country_id",
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
    modelName: "city",
    tableName: "city",
    timestamps: false,
    freezeTableName: true,
    version: true // optimistic locking
  });
  
  return City;
};