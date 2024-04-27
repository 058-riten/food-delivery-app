const express = require('express')
const { createItem } = require('../controllers/menuController')
const router = express.Router()

router.post('/createItem', createItem)