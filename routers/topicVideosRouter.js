const Router = require('express');

const {
    addTopicVideos,
    deleteTopicVideos,
    getAllTopicVideos
} = require('../controller/topicVideosController');

const topicVideoRouter = Router();


topicVideoRouter.get('/topicVideos', getAllTopicVideos);
topicVideoRouter.post('/topicVideos', addTopicVideos);
topicVideoRouter.delete('/topicVideos/:id', deleteTopicVideos);



module.exports = topicVideoRouter;
