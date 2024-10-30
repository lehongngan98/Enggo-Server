const Router = require('express');

const {
    addCategoryTopicVideo,
    deleteCategoryTopicVideo,
    getAllCategoryTopicVideo
} = require('../controller/categoryTopicVideoController');


const categoryTopicVideoRouter = Router();



categoryTopicVideoRouter.get('/categoryTopicVideo', getAllCategoryTopicVideo);
categoryTopicVideoRouter.post('/categoryTopicVideo', addCategoryTopicVideo);
categoryTopicVideoRouter.delete('/categoryTopicVideo/:id', deleteCategoryTopicVideo);



module.exports = categoryTopicVideoRouter;