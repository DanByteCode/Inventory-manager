const express = require('express')
const categoryController = require('../controller/categoryController')
const router = express.Router()

router.get('/', categoryController.getCategories)
router.get('/new', categoryController.getFormCategory)
router.post('/new', categoryController.newCategory)
router.get('/:category', categoryController.getItems)
module.exports = router
