const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  trail_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Trail' },
  comments: String,
  is_public: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);