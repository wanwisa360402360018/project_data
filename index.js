const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsCustomer = {
  origin: "http://localhost:8081",
};

// app.use(cors(corsCustomer));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
// ─── DATABASE ───────────────────────────────────────────────────────────────────
//
 const db = require("./app/models");
 db.db.sequelize.sync().then(() => {});
//
// ─── API ────────────────────────────────────────────────────────────────────────
//

// middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, CUSTOMER"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next(); // next functionF
});

require("./app/routers/user.routers")(app);
require("./app/routers/assessments.routers")(app);
require("./app/routers/assessmentsStatus.routers")(app);
require("./app/routers/assessmentsForm.routers")(app);
require("./app/routers/assessmentsIndex.routers")(app);
require("./app/routers/assessmentsCustomer.routers")(app);
require("./app/routers/assessmentsLavel.routers")(app);

app.get("/", (req, res) => {
  console.log("get");
  res.send("404");
});

//
// ─── START ON PORT ──────────────────────────────────────────────────────────────
//

app.listen(process.env.PORT || 3000, () => {
  console.log("app listen on port 3000");
});
