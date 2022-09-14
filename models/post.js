const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    nickname: { type: String, required: true }, 
    description: { type: String, required: true},
    url: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref:'Category'}
  },
  { timestamps: true }
)

module.exports = postSchema