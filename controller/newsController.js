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
  const { title, content, image, information } = req.body;

  const newNews = new News({
    title,
    content,
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



module.exports = {
  getAllNews,
  createNews,
  deleteNews,
  updateNews,
  getNewsById,

};
