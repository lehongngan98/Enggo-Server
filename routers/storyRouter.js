const Router = require('express');

const {createStory,deleteStory,getAllStory,getStoryById,updateStory} = require('../controller/storyController');

const storyRouter = Router();


storyRouter.get('/stories', getAllStory);
storyRouter.get('/stories/:id', getStoryById);
storyRouter.post('/stories', createStory);
storyRouter.post('/stories/:id', updateStory);
storyRouter.delete('/stories/:id', deleteStory);


module.exports = storyRouter;
