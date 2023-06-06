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

