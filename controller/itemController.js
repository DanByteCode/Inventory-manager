const Item = require('../models/item')
const Category = require('../models/category')

exports.getAllItems = async (req, res, next) => {
  const result = await Item.find({}).populate('category')
  res.render('item', { response: result })
}

exports.getItem = async (req, res, next) => {
  const { id } = req.params
  const find = await Item.findById(id).populate('category')
  res.render('item', { response: [find] })
}

exports.getCreateForm = async (req, res, next) => {
  const categories = await Category.find({})
  const value = {
    name: '',
    quantity: 1,
    description: '',
    category: [],
    categoryList: categories
  }
  res.render('itemForm', value)
}

exports.createItem = async (req, res, next) => {
  Item.create(getValues(req))
    .then(() => {
      res.redirect('/item')
    }).catch(next)
}

exports.getEditForm = async (req, res, next) => {
  const { id } = req.params
  const data = await Item.findById(id)
  const categories = await Category.find({})
  const result = { ...data._doc, categoryList: categories }
  res.render('itemForm', result)
}

exports.editItem = async (req, res, next) => {
  const { id } = req.params
  const form = getValues(req)
  Item.findByIdAndUpdate(id, form)
    .then(() => {
      res.redirect('/item')
    }).catch(next)
}

exports.deleteItem = async (req, res, next) => {
  const { id } = req.params
  Item.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/item')
    }).catch(next)
}

function getValues (req) {
  const { name, quantity, description, category } = req.body
  return {
    name,
    quantity,
    description,
    category
  }
}
