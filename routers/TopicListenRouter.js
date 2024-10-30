const Router = require('express');
const {
    createTopicListen,
    getAllTopicListen,
    deleteTopicListen,
    getTopicListenById,
    updateTopicListen
} = require('../controller/TopicListenController');

const TopicListenRouter = Router();

TopicListenRouter.get('/topicListen', getAllTopicListen);
TopicListenRouter.post('/topicListen', createTopicListen);
TopicListenRouter.post('/topicListen/:id', updateTopicListen);
TopicListenRouter.get('/topicListen/:id', getTopicListenById);
TopicListenRouter.delete('/topicListen/:id', deleteTopicListen);

module.exports = TopicListenRouter;