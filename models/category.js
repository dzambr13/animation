const { Schema } = require('mongoose')

const categorySchema = new Schema(
  {
    description: { type: String, required: true},
    url: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
  },
  { timestamps: true }
)

module.exports = categorySchema