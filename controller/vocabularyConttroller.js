const VocabularyModel = require('../models/vocabularyModel');

// Get all vocabularies
exports.getAllVocabularies = async (req, res) => {
  try {
    const vocabularies = await VocabularyModel.find();
    res.status(200).json(vocabularies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single vocabulary by ID
exports.getVocabularyById = async (req, res) => {
  try {
    const vocabulary = await VocabularyModel.findById(req.params.id);
    if (!vocabulary) {
      return res.status(404).json({ error: 'Vocabulary not found' });
    }
    res.status(200).json(vocabulary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new vocabulary
exports.createVocabulary = async (req, res) => {
  try {
    const newVocabulary = new VocabularyModel(req.body);
    await newVocabulary.save();
    res.status(201).json({
      message: "Vocabulary created successfully!",
      data: newVocabulary,
      status: 201
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a vocabulary by ID
exports.updateVocabulary = async (req, res) => {
  try {
    const updatedVocabulary = await VocabularyModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedVocabulary) {
      return res.status(404).json({ error: 'Vocabulary not found' });
    }
    res.status(200).json(updatedVocabulary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a vocabulary by ID
exports.deleteVocabulary = async (req, res) => {
  try {
    const deletedVocabulary = await VocabularyModel.findByIdAndDelete(req.params.id);
    if (!deletedVocabulary) {
      return res.status(404).json({ error: 'Vocabulary not found' });
    }
    res.status(200).json({ message: 'Vocabulary deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

