import { DataTypes } from "sequelize";

export async function up(queryInterface: any): Promise<void> {
  // country
  await queryInterface.context.createTable("country", {
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
    },
    version: {
      field: "version",
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // city
  await queryInterface.context.createTable("city", {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    countryId: {
      field: "country_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "country",
        key: "id"
      }
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
    },
    version: {
      field: "version",
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // location
  await queryInterface.context.createTable("location", {
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
    },
    version: {
      field: "version",
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  
  // booking
  await queryInterface.context.createTable("booking", {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bookingCode: {
      field: "booking_code",
      type: DataTypes.STRING,
      unique: true
    },
    version: {
      field: "version",
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // contact
  await queryInterface.context.createTable("contact", {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bookingId: {
      field: "booking_id",
      type: DataTypes.INTEGER,
      references: {
        model: "booking",
        key: "id"
      }
    },
    address: {
      field: "address",
      type: DataTypes.STRING,
      unique: true
    },
    version: {
      field: "version",
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // itinerary
  await queryInterface.context.createTable("itinerary", {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bookingId: {
      field: "booking_id",
      type: DataTypes.INTEGER,
      references: {
        model: "booking",
        key: "id"
      }
    },
    type: {
      field: "type",
      type: DataTypes.ENUM(
        "ONE_WAY"
      ),
      allowNull: false
    },
    version: {
      field: "version",
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // connection
  await queryInterface.context.createTable("connection", {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    itineraryId: {
      field: "itinerary_id",
      type: DataTypes.INTEGER,
      references: {
        model: "itinerary",
        key: "id"
      }
    },
    originId: {
      field: "origin_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "location",
        key: "id"
      }
    },
    destinationId: {
      field: "destination_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "location",
        key: "id"
      }
    },
    version: {
      field: "version",
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // segment
  await queryInterface.context.createTable("segment", {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    connectionId: {
      field: "connection_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "connection",
        key: "id"
      }
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
    },
    version: {
      field: "version",
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};

export async function down(queryInterface: any): Promise<void> {
  //await queryInterface.dropTable("booking");
};