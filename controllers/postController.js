const { Post, Category } = require('../models')

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({ post })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPostsByCat = async (req,res) => {
  try {
    const posts = await Post.find({category: req.params.id})
    return res.status(200).json(posts)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}



module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostsByCat
}