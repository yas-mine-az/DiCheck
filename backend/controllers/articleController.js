const Articles = require("../models/articleModel");

// Get Article by UserId
const getArticleByTitle = async (req, res) => {
    try {
      const article = await Articles.findOne({ title: req.params.title });
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {getArticleByTitle};