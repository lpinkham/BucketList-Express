const mongoose = require('mongoose')

const bucketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: false
  },
  completeBy: {
    type: Date,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  shareWith: {
    type: String,
    required: false
  },
  completed: {
    type: String,
    required: false
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
