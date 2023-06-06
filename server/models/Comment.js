
const commentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  trail_id: { type: Schema.Types.ObjectId, ref: 'Trail' },
  comment_text: String,
  is_public: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = model('Comment', commentSchema);