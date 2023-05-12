# Server

Server connects to a mysql instance, and creates tables based on mock.json.

Note: it has not been completed yet, I included that though so you can see the logic on the backend. Models should be defined in sequelize, and an endpoint should be created in graphql to get back the mock data stored in tables (instead of giving back data from mock.json directly.)

Note: .env should never be uploaded to git, the reason you see this is because it's a demo app.

# Client

Client contains two main components. After populating the correct details as per mock.json, the 'check-in' component should slide to the left, giving room for the 'booking' component to show data.

# Client tests

Unit tests can be found for 'check-in' model.
Browser tests still need to be added (using e.g. puppeteer or nightwatch.js) to check if all the animations work fine, or if 'booking' component receives information from it's parent and if it gets rendered properly.