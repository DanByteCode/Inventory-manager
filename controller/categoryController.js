const Category = require('../models/category')
const Item = require('../models/item')

exports.getCategories = async (req, res, next) => {
  const cat = await Category.find({}).exec()
  res.render('category', { category: cat })
}

exports.getFormCategory = async (req, res, next) => {
  res.render('categoryForm', { title: '' })
}

exports.newCategory = async (req, res, next) => {
  const input = req.body.title
  Category.create({
    title: input
  }).then(() => res.redirect('/category'))
    .catch(next)
}

exports.getItems = async (req, res, next) => {
  const { category } = req.params
  const cat = await Category.findOne({ title: category })
  const result = await Item.find({ category: cat.id }).populate('category')
  res.render('item', { response: result })
}
