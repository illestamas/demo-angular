import { Sequelize, Model, DataTypes } from "sequelize";

export interface Booking {
  id: number,
  code: string
}

export default (sequelize: Sequelize) => {
  class Booking extends Model {
    static associate = function(models: any) {
      this.hasMany(models.contact);
      this.hasMany(models.itinerary);
    };
  };

  Booking.init({
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bookingCode: {
      field: "booking_code",
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "booking",
    tableName: "booking",
    timestamps: false,
    freezeTableName: true,
    version: true // optimistic locking
  });
  
  return Booking;
};