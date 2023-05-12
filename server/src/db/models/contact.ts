import { Sequelize, Model, DataTypes } from "sequelize";

export interface Contact {
  id: number,
  bookingId: number,
  address: string
}

export default (sequelize: Sequelize) => {
  class Contact extends Model {
    static associate = function(models: any) {
      this.belongsTo(models.booking);
    };
  };

  Contact.init({
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
    address: {
      field: "address",
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "contact",
    tableName: "contact",
    timestamps: false,
    freezeTableName: true,
    version: true // optimistic locking
  });
  
  return Contact;
};