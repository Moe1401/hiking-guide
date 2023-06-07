const User = require('../models/User');

const userData = [
  {
    username: 'johnDoe',
    password: 'password123',
    hikes: [],
    hiking_goal: 100,
    created_at: '2023-06-07',
    updated_at: '2023-06-07',
  },
  {
    username: 'janeSmith',
    password: 'secret456',
    hikes: [],
    hiking_goal: 50,
    created_at: '2023-06-07',
    updated_at: '2023-06-07',
  },
];

const seedUsers = async () => {
  try {
    await User.deleteMany({}); // Clear existing users
    await User.create(userData); // Create new users
    console.log('Users seeded successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = seedUsers;
