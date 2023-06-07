const mongoose = require('mongoose');
const User = require('../models/User');
const Trail = require('../models/Trail');
const Hike = require('../models/Hike');
const Comment = require('../models/Comments');

async function createSampleData() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/trailsDB', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const [john, jane] = await User.create([
      {
        username: 'john123',
        password: 'password',
        hikes: 
        total_hikes: 10,
        total_distance: 50,
        hiking_goal: 100,
        avg_miles_per_day: 5
      },
      {
        username: 'jane456',
        password: 'password',
        email: 'jane@example.com',
        total_hikes: 5,
        total_distance: 25,
        hiking_goal: 50,
        avg_miles_per_day: 4
      }
    ]);

    const [commentJohn, commentJane] = await Comment.create([
      {
        user_id: john._id,
        trail_id: blazingStarTrail._id,
        comment_text: 'This trail offers stunning views!',
        is_public: true
      },
      {
        user_id: jane._id,
        trail_id: shootingStarTrail._id,
        comment_text: 'Had a great time exploring this trail!',
        is_public: true
      }
    ]);

    const [hikeJohn, hikeJane] = await Hike.create([
      {
        user_id: john._id,
        trail_name: blazingStarTrail._id,
        distance: 5,
        goal_distance: 10,
        comments: [commentJohn._id],
        hiked_at: new Date()
      },
      {
        user_id: jane._id,
        trail_id: shootingStarTrail._id,
        distance: 7,
        goal_distance: 15,
        comments: 'Enjoyed the trail. Will come back again!',
        hiked_at: new Date()
      }
    ]);


    console.log('Sample data created successfully');
    mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err);
    mongoose.disconnect();
  }
}

createSampleData();