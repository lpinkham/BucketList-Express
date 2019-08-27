const mongoose = require('mongoose')

const bucketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  place: {
    type: String
  },
  completeBy: {
    type: String
  },
  description: {
    type: String
  },
  shareWith: {
    type: String
  },
  completed: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Bucket', bucketSchema)
