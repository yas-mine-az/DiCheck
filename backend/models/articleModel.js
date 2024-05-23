const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
  },
  content: {
    type: [String],
    required: true,
  }
});

const Articles = mongoose.model('Article', ArticleSchema);

module.exports = Articles;