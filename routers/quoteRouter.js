const Router = require('express');
const {
    createQuote,
    getAllQuotes,
    deleteQuote,
    updateQuote,
    getQuoteById
} = require('../controller/quoteController');

const quoteRouter = Router();

quoteRouter.get('/quotes', getAllQuotes);
quoteRouter.post('/quotes', createQuote);
quoteRouter.get('/quotes/:id', getQuoteById);
quoteRouter.post('/quotes/:id', updateQuote);
quoteRouter.delete('/quotes/:id', deleteQuote);


module.exports = quoteRouter;