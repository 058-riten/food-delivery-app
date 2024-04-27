const Category = require('../models/categoryModel')

exports.createCategory = async (req, res) => {
    t
}

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        if (!category) {
            return res.status(404).json({ message: 'Category not found.' })
        }
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.updateCategory = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        if (!category) {
            return res.status(404).json({ message: 'Category not found' })
        }
        await category.remove()
        res.status(204).json()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}