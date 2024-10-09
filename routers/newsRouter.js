const Router = require('express');
const {
  getAllNews,
  createNews,
  deleteNews,
  updateNews,
  getNewsById,
  getNewsByCategory,
} = require('../controller/newsController');

const newsRouter = Router();


newsRouter.get('/news', getAllNews);
newsRouter.get('/news/:id', getNewsById);
newsRouter.get('/news/category/:category', getNewsByCategory);
newsRouter.post('/news', createNews);
newsRouter.post('/news/:id', updateNews);
newsRouter.delete('/news/:id', deleteNews);


module.exports = newsRouter;