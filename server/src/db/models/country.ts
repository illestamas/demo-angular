import { Sequelize, Model, DataTypes } from "sequelize";

export interface Country {
  id: number,
  code: string,
  name: string
}

export default (sequelize: Sequelize) => {
  class Country extends Model {
    static associate = function(models: any) {
      this.hasMany(models.city);
    };
  };

  Country.init({
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      field: "code",
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
    modelName: "country",
    tableName: "country",
    timestamps: false,
    freezeTableName: true,
    version: true // optimistic locking
  });
  
  return Country;
};