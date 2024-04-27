const express = require('express')
const { createCategory, getCategories, deleteCategory } = require('../controllers/categoryController')
const router = express.Router()

router.post('/createCategory', createCategory)
router.get('/getCategories', getCategories)
router.delete('/deleteCategory', deleteCategory)