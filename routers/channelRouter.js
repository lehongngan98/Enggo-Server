const Router = require('express');
const {
    createChannel,
    deleteChannel,
    getAllChannels,
    getChannelById,
    updateChannel
} = require('../controller/channelController');

const channelRouter = Router();

channelRouter.get('/channels', getAllChannels);
channelRouter.get('/channels/:id', getChannelById);
channelRouter.post('/channels', createChannel);
channelRouter.post('/channels/:id', updateChannel);
channelRouter.delete('/channels/:id', deleteChannel);

module.exports = channelRouter;
