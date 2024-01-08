const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Database is Connected");
    })
    .catch(() => {
      console.log("Error in Connection");
    });
};

module.exports = connectDatabase;
