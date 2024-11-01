const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VocabSchema = new Schema({
  en: {
    type: String,
    required: true,
  },
  vn: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Define the Vocabulary schema
const CommunicationSchema = new Schema({

  image: {
    type: String,
    required: true,
  },
  titleEn: {
    type: String,
    required: true,
  },
  titleVn: {
    type: String,
    required: true,
  },
  vocab: [VocabSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Create the model from the schema
const CommunicationModel = mongoose.model('Communication', CommunicationSchema);

module.exports = CommunicationModel;