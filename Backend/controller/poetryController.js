const Poetry = require("../model/poetModel");

exports.createPoetry = async (req, res) => {
  const createPoet = await Poetry.create(req.body);
  res.status(201).json({ success: true, createPoet });
};

exports.getAllPoetries = async (req, res) => {
  const getAllPoet = await Poetry.find();
  res.status(200).json({ success: true, getAllPoet });
};
