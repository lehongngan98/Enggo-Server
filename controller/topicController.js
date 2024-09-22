const TopicModel = require('../models/topicModel');
const VocabularyModel = require('../models/vocabularyModel');
// Get all topics
exports.getAllTopics = async (req, res) => {
  try {
    const topics = await TopicModel.find();
    res.status(200).json(topics);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Get a single topic by ID
exports.getTopicById = async (req, res) => {
  try {
    const topic = await TopicModel.findById(req.params.id);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    res.status(200).json(topic);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Create a new topic
exports.createTopic = async (req, res) => {
  try {
    const {image,titleEn,titleVn} = new TopicModel(req.body);

    const newTopic = new TopicModel(req.body);
    await newTopic.save();
    res.status(201).json({
      message: "Topic created successfully!",
      data: newTopic,
      status: 201
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Update a topic by ID
exports.updateTopic = async (req, res) => {
  try {
    const updatedTopic = await TopicModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTopic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    res.status(200).json(updatedTopic);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Delete a topic by ID
exports.deleteTopic = async (req, res) => {
  try {
    const deletedTopic = await TopicModel.findByIdAndDelete(req.params.id);
    if (!deletedTopic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    res.status(200).json({ message: 'Topic deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Add  vocabularies to a topic
exports.addVocabulariesToTopic = async (req, res) => {
  try {
    const topic = await TopicModel.findById(req.params.topicId);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const newVocabulary = new VocabularyModel(req.body);
    if (!newVocabulary) {
      return res.status(400).json({ error: 'Vocabulary not found' });
    }
    console.log(newVocabulary);
    
    topic.vocab.push(newVocabulary);
    await topic.save();

    res.status(201).json({
      message: "Vocabulary added to topic successfully!",
      data: newVocabulary,
      status: 201
    });
  } catch (error) {
    console.log(error);    
    res.status(400).json({ error: error.message });
  }
};

// Add many vocabulary to a topic
exports.addVocabularyToTopic = async (req, res) => {
  try {
    const topic = await TopicModel.findById(req.params.topicId);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    const newVocabularies = req.body;
    const vocabularies = await VocabularyModel.insertMany(newVocabularies);
    topic.vocab.push(...vocabularies);
    await topic.save();
    res.status(201).json({
      message: "Vocabulary added to topic successfully!",
      data: vocabularies,
      status: 201
    });
  }
  catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};