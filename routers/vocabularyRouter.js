const express = require('express');
const router = express.Router();
const vocabularyController = require('../controller/vocabularyConttroller');

// Define routes
router.get('/vocabularies', vocabularyController.getAllVocabularies);
router.get('/vocabularies/:id', vocabularyController.getVocabularyById);
router.post('/vocabularies', vocabularyController.createVocabulary);
router.put('/vocabularies/:id', vocabularyController.updateVocabulary);
router.delete('/vocabularies/:id', vocabularyController.deleteVocabulary);


module.exports = router;