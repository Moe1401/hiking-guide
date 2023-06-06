// User Model
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  total_hikes: Number,
  total_distance: Number,
  hiking_goal: Number,
  avg_miles_per_day: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = model('User', userSchema);

// Comment Model
const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  trail_id: { type: Schema.Types.ObjectId, ref: 'Trail' },
  comment_text: String,
  is_public: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = model('Comment', commentSchema);
