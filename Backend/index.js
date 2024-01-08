const app = require("./app");
const connectDatabase = require("./Config/db");

process.on("uncaughtException", (e) => {
  console.log(`Shuting up server due to error:${e.message}`);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  const dotenv = require("dotenv").config({ path: "./config/.env" });
}
// Connecting Database
connectDatabase();
// Servr
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening on port at http://localhost:${process.env.PORT}`
  );
});
// Handling exceptions
process.on("unhandledRejection", (e) => {
  console.log(`Shutting up server due to error:${e.message}`);
  server.close(() => {
    process.exit(1);
  });
});
