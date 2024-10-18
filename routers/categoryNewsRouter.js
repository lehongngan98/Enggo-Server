const Router = require('express');

const {
    createCategoryNews,
    deleteCategoryNews,
    getAllCategoryNews,
    getCategoryNewsById,    
} = require('../controller/categoryNewsController');

const categoryNewsRouter = Router();

categoryNewsRouter.get('/categoryNews', getAllCategoryNews);
categoryNewsRouter.get('/categoryNews/:id', getCategoryNewsById);
categoryNewsRouter.post('/categoryNews', createCategoryNews);
categoryNewsRouter.delete('/categoryNews/:id', deleteCategoryNews);


module.exports = categoryNewsRouter;