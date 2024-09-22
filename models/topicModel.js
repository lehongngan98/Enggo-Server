const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const VocabularySchema = require('./vocabularyModel').schema;

// Define the Topic schema
const TopicSchema = new Schema({
  image: { type: String, required: true },
  titleEn: { type: String, required: true },
  titleVn: { type: String, required: true },
  vocab: [VocabularySchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Add auto-increment plugin to the schema
TopicSchema.plugin(AutoIncrement, {inc_field: 'id'});

// Create the model from the schema
const TopicModel = mongoose.model('topics', TopicSchema);

module.exports = TopicModel;