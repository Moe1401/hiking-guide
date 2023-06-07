const mongoose = require('mongoose');

const hikeSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  trail_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Trail' },
  distance: Number,
  goal_distance: Number,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comments',
    },
  ],
  hiked_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Hike', hikeSchema);