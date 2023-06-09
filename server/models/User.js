const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
  hikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hike' }],
  hiking_goal: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

userSchema.virtual('total_hikes').get(function () {
  return this.hikes.length;
});

userSchema.virtual('total_distance').get(function () {
  return this.hikes.map(function (hike) { hike.distance }).reduce(function (total, elem) { return total + elem });
});

userSchema.virtual('account_age_in_days').get(function () {
  return Math.ceil((Date.now() - this.created_at) / (1000 * 60 * 60 * 24));
});

// TODO: DRY this up
userSchema.virtual('average_distance_per_day').get(function () {
  const total_distance = this.hikes.map(function (hike) { hike.distance }).reduce(function (total, elem) { return total + elem });
  const account_age_in_days = Math.ceil((Date.now() - this.created_at) / (1000 * 60 * 60 * 24));
  return total_distance / account_age_in_days;
})
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const User = mongoose.model('User', userSchema);

module.exports = User;
