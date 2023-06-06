const { Schema, model } = require('mongoose');

const hikeSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  trail_id: { type: Schema.Types.ObjectId, ref: 'Trail' },
  distance: Number,
  goal_distance: Number,
  comments: String,
  hiked_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = model('Hike', hikeSchema);