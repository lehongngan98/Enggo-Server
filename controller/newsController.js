const mongoose = require('mongoose');
const categoryNewsModel = require('../models/categoryNewsModel');
const News = require('../models/newsModel');


const getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json({
      status: 200,
      data: news
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Thêm tin tức mới
const createNews = async (req, res) => {
  const { title, content,category, image, information } = req.body;

  const newNews = new News({
    title,
    content,
    category,
    image,
    information,
  });

  try {
    await newNews.save();
    res.status(201).json({
      status: 201,
      data: newNews
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({
        message: 'News article not found'
      });
    }
    res.status(200).json({
      status: 200,
      message: 'News deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body);
    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }
    res.status(200).json({
      status: 200,
      message: 'News updated successfully'
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



const getNewsById = async (req, res) => {

  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }
    res.status(200).json({
      status: 200,
      data: news
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNewsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  
  console.log("Category ID received:", categoryId); // Log the received categoryId

  try {
    const category = await categoryNewsModel.findById(categoryId); // Check if the category exists
    console.log("Category found:", category); // Log the found category
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Use 'new' to create ObjectId
    const news = await News.find({ category: categoryId});
    
    if (news.length === 0) {
      return res.status(404).json({ message: 'News article not found' });
    }

    res.status(200).json({
      status: 200,
      data: news
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllNews,
  createNews,
  deleteNews,
  updateNews,
  getNewsById,
  getNewsByCategory,

};
