const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({

  trail: String,
  trail_uses: [String],
  paved: Number,
  natural_surface: Number,
  groomed: Number,
  ski_trail: Boolean,
  atv_trail: Boolean,
  description: String,
  landscape: String,
  permits: [String],
  parking: [String],
  restrooms: [String],
  winter: [String],
  latitude: Number,
  longitude: Number,
  map_latitude: Number,
  map_longitude: Number,
  map_zoom: Number,
  map_zoom_embed: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trail', trailSchema);