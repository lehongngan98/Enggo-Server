const CommunicationModel = require('../models/communicationModel');

// Get all communication
exports.getAllCommunication = async (req, res) => {
  try {
    const communication = await CommunicationModel.find();
    res.status(200).json(communication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single communication by ID
exports.getCommunicationById = async (req, res) => {
  try {
    const communication = await CommunicationModel.findById(req.params.id);
    if (!communication) {
      return res.status(404).json({ error: 'Communication not found' });
    }
    res.status(200).json(communication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new communication
exports.createCommunication = async (req, res) => {
  try {
    const newcommunication = new CommunicationModel(req.body);
    await newcommunication.save();
    res.status(201).json({
      message: "Communication created successfully!",
      data: newcommunication,
      status: 201
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a communication by ID
exports.updateCommunication = async (req, res) => {
  try {
    const updatedcommunication = await CommunicationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedcommunication) {
      return res.status(404).json({ error: 'Communication not found' });
    }
    res.status(200).json(updatedcommunication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a communication by ID
exports.deleteCommunication = async (req, res) => {
  try {
    const deletedcommunication = await CommunicationModel.findByIdAndDelete(req.params.id);
    if (!deletedcommunication) {
      return res.status(404).json({ error: 'Communication not found' });
    }
    res.status(200).json({ message: 'Communication deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

