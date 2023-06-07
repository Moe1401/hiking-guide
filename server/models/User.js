const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  total_hikes: Number,
  total_distance: Number,
  hiking_goal: Number,
  avg_miles_per_day: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
