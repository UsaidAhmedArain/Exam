const express = require("express");
const router = express.Router();
const {
  createPoetry,
  getAllPoetries,
} = require("../controller/poetryController");

router.post("/createPoetry", createPoetry);
router.get("/getAllPoetries", getAllPoetries);
module.exports = router;
