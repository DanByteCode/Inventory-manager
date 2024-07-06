const mon = require('mongoose')
const Schema = mon.Schema

const categorySchema = new Schema({
  title: { type: String, required: true, minLength: 3, maxLength: 32 }
})

const newFormat = {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    return ret
  }
}
categorySchema.set('toObject', newFormat)
categorySchema.set('toString', newFormat)

module.exports = mon.model('Category', categorySchema)
