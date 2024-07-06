const mon = require('mongoose')
const Schema = mon.Schema

const itemSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 32 },
  description: { type: String, minLength: 3, maxLength: 120 },
  quantity: { type: Number, required: true, min: 0, max: 999 },
  category: [{ type: Schema.ObjectId, ref: 'Category' }]
})

module.exports = mon.model('Item', itemSchema)
