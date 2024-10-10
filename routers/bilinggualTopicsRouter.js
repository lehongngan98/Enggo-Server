const Router = require('express');
const {
    createBilingualTopic,
    getAllBilingualTopics,
    deleteBilingualTopic,
    updateBilingualTopic,
    getBilingualTopicById
} = require('../controller/bilingualTopicsController');
const { model } = require('mongoose');

const bilingualTopicsRouter = Router();


bilingualTopicsRouter.get('/bilingual-topics', getAllBilingualTopics);
bilingualTopicsRouter.get('/bilingual-topics/:id', getBilingualTopicById);
bilingualTopicsRouter.post('/bilingual-topics', createBilingualTopic);
bilingualTopicsRouter.post('/bilingual-topics/:id', updateBilingualTopic);
bilingualTopicsRouter.delete('/bilingual-topics/:id', deleteBilingualTopic);

module.exports = bilingualTopicsRouter;