const express = require('express');
const router = express.Router();
const topicController = require('../controller/topicController');

// Define routes
router.get('/topics', topicController.getAllTopics);
router.get('/topics/:id', topicController.getTopicById);
router.post('/topics', topicController.createTopic);
router.put('/topics/:id', topicController.updateTopic);
router.delete('/topics/:id', topicController.deleteTopic);
router.post('/topics/:topicId/vocabularies', topicController.addVocabularyToTopic);
router.post('/topics/:topicId/vocabularies', topicController.addVocabulariesToTopic);

module.exports = router;