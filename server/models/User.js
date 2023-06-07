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
  hikes: [{ type: Schema.Types.ObjectId, ref: 'Hike' }],
  hiking_goal: Number,
  avg_miles_per_day: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

userSchema.virtual('total_hikes').get(function(){
  return this.hikes.length;
});

userSchema.virtual('total_distance').get(function(){
  return this.hikes.map(function(hike){hike.distance}).reduce(function(total,elem){return total+elem});
});

userSchema.virtual('account_age_in_days').get(function(){
  return Math.ceil((Date.now() - this.created_at )/ (1000 * 60 * 60 * 24));
});

// userSchema.virtual('average_distance_per_day').get()

const User = mongoose.model('User', userSchema);

module.exports = User;
