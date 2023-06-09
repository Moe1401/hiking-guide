const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
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
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual('total_hikes').get(function () {
  return this.hikes.length;
});

userSchema.virtual('account_age_in_days').get(function () {
  return Math.ceil((Date.now() - this.created_at) / (1000 * 60 * 60 * 24));
});

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
