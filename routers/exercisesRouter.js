const Router = require('express');

const {
    getAllExercises,
    createExercise,
    deleteExercise,
    updateExercise,
    getExerciseById,
} = require('../controller/exercisesController');

const exercisesRouter = Router();

exercisesRouter.get('/exercises', getAllExercises);
exercisesRouter.get('/exercises/:id', getExerciseById);
exercisesRouter.post('/exercises', createExercise);
exercisesRouter.post('/exercises/:id', updateExercise);
exercisesRouter.delete('/exercises/:id', deleteExercise);

module.exports = exercisesRouter;