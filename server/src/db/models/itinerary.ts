import { Sequelize, Model, DataTypes } from "sequelize";

enum ItineraryType {
  "ONE_WAY"
}

export interface Itinerary {
  id: number,
  bookingId: number,
  type: keyof typeof ItineraryType
}

export default (sequelize: Sequelize) => {
  class Itinerary extends Model {
    static associate = function(models: any) {
      this.belongsTo(models.booking);
      this.hasMany(models.connection);
    };
  };

  Itinerary.init({
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bookingId: {
      field: "booking_id",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      field: "type",
      type: DataTypes.ENUM(
        "ONE_WAY"
      ),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "itinerary",
    tableName: "itinerary",
    timestamps: false,
    freezeTableName: true,
    version: true // optimistic locking
  });
  
  return Itinerary;
};