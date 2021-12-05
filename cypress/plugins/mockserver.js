//
// This server will be started by Protractor in end-to-end tests.
// Add your API mocks for your specific project in this file.
//
const { on } = require("events");
const express = require("express");
const port = 3000;

let app = express();
let routes = require("express").Router();

// Global mock objects
const mockUserData = [
  {
    id: 0,
    firstName: "Eerste",
    lastName: "User",
    emailAdress: "usereen@host.com",
    role: 0,
  },
  {
    id: 1,
    firstName: "Tweede",
    lastName: "User",
    emailAdress: "usertwee@host.com",
    role: 1,
  },
  {
    id: 2,
    firstName: "Derde",
    lastName: "User",
    emailAdress: "userdrie@host.com",
    role: 2,
  },
];

// Add CORS headers so our external Angular app is allowed to connect
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

routes.post("/api/auth/login", (req, res, next) => {
  res.status(200).json(mockUserData[0]);
});

routes.get("/api/users", (req, res, next) => {
  res.status(200).json(mockUserData);
});

//
// Write your own mocking API endpoints here.
//

// Finally add your routes to the app
app.use(routes);

app.use("*", function (req, res, next) {
  next({ error: "Non-existing endpoint" });
});

app.use((err, req, res, next) => {
  res.status(400).json(err);
});

app.listen(port, () => {
  console.log("Mock backend server running on port", port);
});

process.on("uncaughtException", (err) => {
  console.log("There was an uncaught error", err);
  process.exit(1); //mandatory (as per the Node.js docs)
});
