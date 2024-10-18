const CategoryNews = require('../models/categoryNewsModel');


const getAllCategoryNews = async (req, res) => {
    try {
        const categoryNews = await CategoryNews.find();
        res.status(200).json({
            status: 200,
            data: categoryNews
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCategoryNewsById = async (req, res) => {
    try {
        const categoryNews = await CategoryNews.findById(req.params.id);
        if (!categoryNews) {
            return res.status(404).json({ message: "CategoryNews not found" });
        }
        res.status(200).json({
            status: 200,
            data: categoryNews,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCategoryNews = async (req, res) => {
    const categoryNews = Array.isArray(req.body) ? req.body : [req.body];
    try {
        const newCategoryNews = await CategoryNews.insertMany(categoryNews);        
        res.status(201).json({
            message: "CategoryNews created successfully!",
            status: 201,
            data: newCategoryNews,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteCategoryNews = async (req, res) => {
    try {
        const categoryNews = await CategoryNews.findByIdAndDelete(req.params.id);
        if (!categoryNews) {
            return res.status(404).json({ message: 'CategoryNews not found' });
        }
        res.status(200).json({
            message: 'CategoryNews deleted successfully',
            data: categoryNews,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllCategoryNews,
    getCategoryNewsById,
    createCategoryNews,
    deleteCategoryNews,
};