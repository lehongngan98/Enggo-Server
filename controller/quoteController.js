const quoteModel = require("../models/quoteModel");
const Quote = require("../models/quoteModel");

const getAllQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.status(200).json({
            status: 200,
            data: quotes,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getQuoteById = async (req, res) => {
    try {
        const quote = await Quote.findById(req.params.id);
        if (!quote) {
            return res.status(404).json({ message: "Quote not found" });
        }
        res.status(200).json({
            status: 200,
            data: quote,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createQuote = async (req, res) => {
    const quotes = Array.isArray(req.body) ? req.body : [req.body];
    try {
        const newQuotes = await Quote.insertMany(quotes);
        res.status(201).json({
            status: 201,
            data: newQuotes,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateQuote = async (req, res) => {
    try {
        const Quote = await quoteModel.findByIdAndUpdate(req.params.id, req.body);
        if (!Quote) {
            return res.status(404).json({ message: 'Quote article not found' });
        }
        res.status(200).json({
            status: 200,
            message: 'Quote updated successfully'
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteQuote = async (req, res) => {
    try {
        const quote = await Quote.findByIdAndDelete(req.params.id);
        if (!quote) {
            return res.status(404).json({
                message: 'Quote not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Quote deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
    
        

module.exports = {
    getAllQuotes,
    createQuote,
    getQuoteById,
    updateQuote,
    deleteQuote
};
