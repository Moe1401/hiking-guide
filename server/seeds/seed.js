const mongoose = require('mongoose');
const User = require('../models/User');
const Trail = require('../models/Trail');
const Hike = require('../models/Hike');
const Comment = require('../models/Comment');

async function createSampleData() {
  try {
    await mongoose.connect('mongodb://localhost:27017/trailsDB', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const [john, jane] = await User.create([
      {
        username: 'john123',
        password: 'password',
        email: 'john@example.com',
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

    const [blazingStarTrail, shootingStarTrail] = await Trail.create([
      {
        trail_name: 'Blazing Star State Trail',
        trail_uses: ['Hiking', 'Biking', 'In-line skating', 'Wheelchair access'],
        paved: 6,
        description: 'The Blazing Star State Trail is paved and runs from Albert Lea Lake in Albert Lea to Myre-Big Island State Park, a distance of approximately six miles.',
        latitude: 43.64850,
        longitude: -93.35425
      },
      {
        trail_name: 'Shooting Star State Trail',
        trail_uses: ['Hiking', 'Biking', 'Horseback riding', 'Snowmobiling'],
        paved: 10,
        description: 'The Shooting Star State Trail is a 10-mile long paved trail that winds through scenic southeastern Minnesota.',
        latitude: 43.84568,
        longitude: -92.65206
      }
    ]);

    const [hikeJohn, hikeJane] = await Hike.create([
      {
        user_id: john._id,
        trail_id: blazingStarTrail._id,
        distance: 5,
        goal_distance: 10,
        comments: 'Great trail with beautiful views!',
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

    await Comment.create([
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

    console.log('Sample data created successfully');
    mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err);
    mongoose.disconnect();
  }
}

createSampleData();
