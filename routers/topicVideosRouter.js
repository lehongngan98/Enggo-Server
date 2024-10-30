const Router = require('express');

const {
    addTopicVideos,
    deleteTopicVideos,
    getAllTopicVideos,
    getTopicVideosById,
    updateTopicVideos
} = require('../controller/topicVideosController');

const topicVideoRouter = Router();


topicVideoRouter.get('/topicVideos', getAllTopicVideos);
topicVideoRouter.post('/topicVideos', addTopicVideos);
topicVideoRouter.delete('/topicVideos/:id', deleteTopicVideos);
topicVideoRouter.get('/topicVideos/:id', getTopicVideosById);
topicVideoRouter.post('/topicVideos/:id', updateTopicVideos);



module.exports = topicVideoRouter;
