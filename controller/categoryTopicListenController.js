const CategoryTopicListen = require('../models/categoryTopicListen');

const getAllCategoryTopicListen = async (req, res) => {
    try {
        const categoryTopicListen = await CategoryTopicListen.find();
        res.status(200).json({
            status: 200,
            data: categoryTopicListen
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCategoryTopicListenById = async (req, res) => {
    try {
        const categoryTopicListen = await CategoryTopicListen.findById(req.params.id);
        if (!categoryTopicListen) {
            return res.status(404).json({ message: "CategoryTopicListen not found" });
        }
        res.status(200).json({
            status: 200,
            data: categoryTopicListen,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCategoryTopicListen = async (req, res) => {
    const categoryTopicListen = Array.isArray(req.body) ? req.body : [req.body];
    try {
        const newCategoryTopicListen = await CategoryTopicListen.insertMany(categoryTopicListen);        
        res.status(201).json({
            message: "CategoryTopicListen created successfully!",
            status: 201,
            data: newCategoryTopicListen,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCategoryTopicListen = async (req, res) => {
    try {
        const categoryTopicListen = await CategoryTopicListen.findByIdAndDelete(req.params.id);
        if (!categoryTopicListen) {
            return res.status(404).json({ message: 'CategoryTopicListen not found' });
        }
        res.status(200).json({
            message: 'CategoryTopicListen deleted successfully',
            data: categoryTopicListen,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getAllCategoryTopicListen,
    getCategoryTopicListenById,
    createCategoryTopicListen,
    deleteCategoryTopicListen
};