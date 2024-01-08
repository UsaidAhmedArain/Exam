const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors())
const Poetry = require("./routes/poetRoutes");

//Poetry Routes
app.use("/api/v1",Poetry)

module.exports = app;