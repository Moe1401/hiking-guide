const connection = require('../config/connection');
const User = require('../models/User');
const { ObjectId } = require('mongoose').Types;



async function seedUsers() {
  try {
    await connection;
    
    const userData = [
      {
        _id: new ObjectId('647e11311ba1d11e7e07d226'),
        username: 'johnDoe',
        password: 'password123',
        hikes: [],
        hiking_goal: 100,
        created_at: '2023-06-07',
        updated_at: '2023-06-07',
      },
      {
        _id: new ObjectId('647e11311ba1d11e7e07d227'), // User ID reference
        username: 'janeSmith',
        password: 'secret456',
        hikes: [],
        hiking_goal: 50,
        created_at: '2023-06-07',
        updated_at: '2023-06-07',
      },
    ];

    await User.deleteMany({}); // Clear existing users
    await User.create(userData); // Create new users
    console.log('Users seeded successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  } 
}


module.exports = seedUsers;
