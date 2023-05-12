import express from "express";
import fs from "fs";

import graphqlFields from "graphql-fields";

import {
  buildSchema
} from "graphql";

import { graphqlHTTP } from "express-graphql";

const schema = buildSchema(fs.readFileSync(__dirname + "/schema.graphql").toString());

const root = {
  getBooking: async(argument: any, request: any, info: any) => {
    let fields = graphqlFields(info);

    console.log(fields);
    const include = [];
    if (fields.contactDetails) {
      include.push({
        association: "contacts",
        attributes: fields.contactDetails
      });
    }

    console.log({
      where: {
        bookingCode: argument.bookingCode
      },
      include: include
    });

    const booking = await global.db.booking.findOne({
      where: {
        bookingCode: argument.bookingCode
      },
      include: include
    });

    return booking;
  }
}

const router = express.Router();

router.use("/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

export default router;