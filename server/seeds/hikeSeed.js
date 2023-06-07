const connection = require('../config/connection');
const Hike = require('../models/Hike');

async function seedHikes() {
  try {
    await connection;

    const hikeData = [
      {
        user_id: '647e11311ba1d11e7e07d226', // User ID reference
        trail_id: '647e11311ba1d11e7e07d228', // Trail ID reference
        distance: 5,
        goal_distance: 10,
        comments: [],
        hiked_at: '2023-06-07',
        created_at: '2023-06-07',
        updated_at: '2023-06-07',
      },
      {
        user_id: '647e11311ba1d11e7e07d227', // User ID reference
        trail_id: '647e11311ba1d11e7e07d229', // Trail ID reference
        distance: 8,
        goal_distance: 15,
        comments: [],
        hiked_at: '2023-06-07',
        created_at: '2023-06-07',
        updated_at: '2023-06-07',
      },
    ];

    await Hike.deleteMany({}); // Clear existing hikes
    await Hike.create(hikeData); // Create new hikes
    console.log('Hikes seeded successfully!');
  } catch (error) {
    console.error('Error seeding hikes:', error);
  }
}


module.exports = seedHikes;