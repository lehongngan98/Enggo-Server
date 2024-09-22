const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Vocabulary schema
const VocabularySchema = new Schema({
  
  en: { type: String, required: true },
  vn: { type: String, required: true },
  audio: { type: String, required: false },
});

// Create the model from the schema
const VocabularyModel = mongoose.model('vocabularies', VocabularySchema);

module.exports = VocabularyModel;