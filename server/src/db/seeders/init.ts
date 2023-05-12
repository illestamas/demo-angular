export async function add(_db: any): Promise<void> {
  const country_1 = await _db.country.create({
    code: "NL",
    name: "The Netherlands"
  });

  const city_1 = await country_1.createCity({
    IATACode: "AMS",
    name: "Amsterdam"
  });

  const location_1 = await city_1.createLocation({
    IATACode: "AMS",
    name: "Schiphol"
  });

  const country_2 = await _db.country.create({
    code: "FR",
    name: "France"
  });

  const city_2 = await country_2.createCity({
    IATACode: "NCE",
    name: "Nice"
  });

  const location_2 = await city_2.createLocation({
    IATACode: "NCE",
    name: "Cote D'Azur Airport"
  });

  const booking_1 = await _db.booking.create({
    bookingCode: "PZIGZ3"
  });

  const contact_1 = await booking_1.createContact({
    address: "TRAINER@YAHOO.FR"
  });

  const itinerary_1 = await booking_1.createItinerary({
    type: "ONE_WAY"
  });

  const connection_1 = await itinerary_1.createConnection({
    id: 1,
    duration: "120",
    originId: location_1.getDataValue("id"),
    destinationId: location_2.getDataValue("id")
  });

  const segment_1 = await connection_1.createSegment({
    id: 2,
    type: "LOCAL",
    informational: false,
    departFromId: location_1.getDataValue("id"),
    arriveToId: location_2.getDataValue("id")
  });

  const test = await _db.booking.findOne({
    where: {
      bookingCode: "PZIGZ3"
    },
    include: [
      {
        association: "contacts"
      }
    ]
  });
  console.log(test);
};