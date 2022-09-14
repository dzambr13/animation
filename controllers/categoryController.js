const { Category } = require('../models')

const createCategory = async (req, res) => {
  try {
    const category = await new Category(req.body)
    await category.save()
    return res.status(201).json({
      account
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    return res.status(200).json(categories)
  } catch (e) {
    return res.status(500).send(error.message)
  }
}

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Category.findById(id)
    if(!category) throw Error('The category with the specified ID does not exist!')
      res.status(200).json(category)
    } catch (e) {
    res.status(500).send('The category with the specified ID does not exist!')
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById
}