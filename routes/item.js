const express = require('express')
const router = express.Router()
const itemController = require('../controller/itemController')

/* GET users listing. */

router.get('/create', itemController.getCreateForm)
router.post('/create', itemController.createItem)

router.get('/edit/:id', itemController.getEditForm)
router.post('/edit/:id', itemController.editItem)
router.get('/delete/:id', itemController.deleteItem)

router.get('/', itemController.getAllItems)
router.get('/:id', itemController.getItem)
module.exports = router