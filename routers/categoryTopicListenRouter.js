const Router = require('express');

const {
    createCategoryTopicListen,
    deleteCategoryTopicListen,
    getAllCategoryTopicListen,
    getCategoryTopicListenById,
} = require('../controller/categoryTopicListenController');

const categoryTopicListenRouter = Router();

categoryTopicListenRouter.get('/categoryTopicListen', getAllCategoryTopicListen);
categoryTopicListenRouter.get('/categoryTopicListen/:id', getCategoryTopicListenById);
categoryTopicListenRouter.post('/categoryTopicListen', createCategoryTopicListen);
categoryTopicListenRouter.delete('/categoryTopicListen/:id', deleteCategoryTopicListen);



module.exports = categoryTopicListenRouter;