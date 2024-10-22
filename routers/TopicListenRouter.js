const Router = require('express');
const {
    createTopicListen,
    getAllTopicListen,
    deleteTopicListen,
    getTopicListenById
} = require('../controller/TopicListenController');

const TopicListenRouter = Router();

TopicListenRouter.get('/topicListen', getAllTopicListen);
TopicListenRouter.post('/topicListen', createTopicListen);
TopicListenRouter.get('/topicListen/:id', getTopicListenById);
TopicListenRouter.delete('/topicListen/:id', deleteTopicListen);

module.exports = TopicListenRouter;