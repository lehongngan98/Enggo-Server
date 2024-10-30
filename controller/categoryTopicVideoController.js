const CategoryTopicVideos = require('../models/categoryTopicVideo');

const getAllCategoryTopicVideo = async (req, res) => {
    try {
        const categoryTopicVideo = await CategoryTopicVideos.find();
        res.status(200).json({
            status: 200,
            data: categoryTopicVideo
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addCategoryTopicVideo = async (req, res) => {
    const categoryTopicVideo = Array.isArray(req.body) ? req.body : [req.body];
    try {
        const newCategoryTopicVideo = await CategoryTopicVideos.insertMany(categoryTopicVideo);        
        res.status(201).json({
            message: "CategoryTopicVideo created successfully!",
            status: 201,
            data: newCategoryTopicVideo,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteCategoryTopicVideo = async (req, res) => {
    try {
        const categoryTopicVideo = await CategoryTopicVideos.findByIdAndDelete(req.params.id);
        if (!categoryTopicVideo) {
            return res.status(404).json({ message: 'CategoryTopicVideo not found' });
        }
        res.status(200).json({
            message: 'CategoryTopicVideo deleted successfully',
            data: categoryTopicVideo,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllCategoryTopicVideo,
    addCategoryTopicVideo,
    deleteCategoryTopicVideo
}