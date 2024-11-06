const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  text: String,
});


const ChoosePhraseSchema = new mongoose.Schema({
  question: String, // Defines the question for the choosePhrase
  options:[String], // Defines the options for the choosePhrase
  correctAnswer: String // Embeds the AnswerSchema as an array
});

const ExerciseSchema = new mongoose.Schema({
  title: String,
  link: String,
  image: String,
  content: [ContentSchema],
  choosePhrase: [ChoosePhraseSchema],
});

const ExercisesSchema = new mongoose.Schema({
  title: String,
  background: String,
  Items: [ExerciseSchema],
});

module.exports = mongoose.model("Exercises", ExercisesSchema);
