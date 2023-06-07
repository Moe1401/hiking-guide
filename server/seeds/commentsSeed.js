const Comment = require('../models/Comment');

const commentData = [
  {
    user_id: '647e11311ba1d11e7e07d226', // User ID reference
    trail_id: '647e11311ba1d11e7e07d228', // Trail ID reference
    comments: 'This trail is absolutely beautiful!',
    is_public: true,
    created_at: '2023-06-07',
    updated_at: '2023-06-07',
  },
  {
    user_id: '647e11311ba1d11e7e07d227', // User ID reference
    trail_id: '647e11311ba1d11e7e07d228', // Trail ID reference
    comments: 'Had a great time hiking this trail!',
    is_public: false,
    created_at: '2023-06-07',
    updated_at: '2023-06-07',
  },
];

const seedComments = async () => {
  try {
    await Comment.deleteMany({}); // Clear existing comments
    await Comment.create(commentData); // Create new comments
    console.log('Comments seeded successfully!');
  } catch (error) {
    console.error('Error seeding comments:', error);
  }
};

module.exports = seedComments;
