const Exercises = require("../models/exercisesModel");

const getAllExercises = async (req, res) => {
    try {
        const exercises = await Exercises.find();
        res.status(200).json({
            status: 200,
            data: exercises,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createExercise = async (req, res) => {
    try {
        const newExercise = await Exercises.create(req.body);
        res.status(201).json({
            status: 201,
            data: newExercise,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteExercise = async (req, res) => {
    try {
        const exercise = await Exercises.findByIdAndDelete(req.params.id);
        if (!exercise) {
            return res.status(404).json({
                message: "Exercise not found",
            });
        }
        res.status(200).json({
            status: 200,
            message: "Exercise deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateExercise = async (req, res) => {
    try {
        const exercise = await Exercises.findByIdAndUpdate(req.params.id, req.body);
        if (!exercise) {
            return res.status(404).json({ message: "Exercise not found" });
        }
        res.status(200).json({
            status: 200,
            message: "Exercise updated successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getExerciseById = async (req, res) => {
    try {
        const exercise = await Exercises.findById(req.params.id);
        if (!exercise) {
            return res.status(404).json({ message: "Exercise not found" });
        }
        res.status(200).json({
            status: 200,
            data: exercise,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllExercises,
    createExercise,
    deleteExercise,
    updateExercise,
    getExerciseById,
};