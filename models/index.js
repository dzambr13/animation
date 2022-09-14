const mongoose = require('mongoose')
const categorySchema = require('./category')
const postSchema = require('./post')

const Category = mongoose.model('Category', categorySchema)
const Post = mongoose.model('Post', postSchema)

module.exports = {
  Category,
  Post
}