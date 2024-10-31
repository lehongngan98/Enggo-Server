const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  text: String,
});

const ChoosePhraseSchema = new mongoose.Schema({
  question: String,
  answer: [{ text: String }],
});

const ExerciseSchema = new mongoose.Schema({
  title: String,
  link: String,
  image: String,
  content: [ContentSchema],
  choosePhrase: [ChoosePhraseSchema],
});

const Exercises = new mongoose.Schema({
  title: String,
  background: String,
  Items: [ExerciseSchema],
});

module.exports = mongoose.model("Exercises", Exercises);
