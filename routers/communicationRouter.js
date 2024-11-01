const express = require('express');
const router = express.Router();
const communicationController = require('../controller/communicationController');

// Define routes
router.get('/communication', communicationController.getAllCommunication);
router.get('/communication/:id', communicationController.getCommunicationById);
router.post('/communication', communicationController.createCommunication);
router.post('/communication/:id', communicationController.updateCommunication);
router.delete('/communication/:id', communicationController.deleteCommunication);


module.exports = router;