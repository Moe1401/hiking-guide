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

    const [blazingStarTrail, shootingStarTrail] = await Trail.create([
      {
        "_id": {
          "$oid": "647e11311ba1d11e7e07d228"
        },
        "trail": "Blazing Star State Trail",
        "trailUses": ["Hiking", "Biking", "In-line skating", "Wheelchair access"],
        "paved": 6,
        "naturalSurface": null,
        "groomed": null,
        "skiTrail": null,
        "atvTrail": null,
        "description": "The Blazing Star State Trail is paved and runs from Albert Lea Lake in Albert Lea to Myre-Big Island State Park, a distance of approximately six miles. The trail currently connects to Albert Lea's city trail system. When completed, the Blazing Star State Trail will be approximately 20 miles long and will run from Albert Lea and Austin, connecting to Austin's city trail system as well the Shooting Star State Trail.",
        "landscape": "Trail users will enjoy views of rural landscapes along the entire trail. Myre-Big Island State Park affords the opportunity to experience a diversity of natural environments including wetlands, oak savanna, big woods, and prairie. The park is considered one of the many good birding spots in southern Minnesota, especially during spring and fall migration.",
        "permits": ["You will need a vehicle permit to park in a state park.", "No fees or passes are required to use the trail."],
        "parking": ["In Albert Lea, at the Frank Hall Park or East Front Street trailheads.", "In Myre-Big Island State Park at the Visitor Center, Big Island and White Fox Campground.", "West of Hayward at the trailhead on Township Road 290.", "In Hayward at the city trailhead on West Street."],
        "restrooms": ["At Frank Hall Park in Albert Lea", "At the White Fox Campground in Myre-Big Island State Park"],
        "winter": ["Cross-country skiing, snowshoeing, and hiking are permitted winter uses. Trails are not groomed or packed. There is no snowmobiling on the trail."],
        "lat":	43.64850,
        "long":	-93.35425,
        "map_latitude": 43.64850,
        "map_longitude": -93.35425,
        "map_zoom": 11,
        "created_at": 06/07/2023,
        "updated_at": 06/07/2023
      },
      {
        "_id": {
        "$oid": "647e11311ba1d11e7e07d229"
        },
        "trail": "Brown's Creek State Trail",
        "trailUses": ["Hiking", "Biking", "In-line skating", "Horseback", "Wheelchair access"],
        "paved": 6,
        "naturalSurface": null,
        "skiTrail": null,
        "atvTrail": null,
        "description": "This beautiful trail is 5.9 miles long and connects the Gateway State Trail in the city of Grant to the St. Croix National Scenic Riverway opens in a new browser tab in Stillwater. Situated on a former railroad grade, the trail is generally level and accessible to users of all abilities. The trail connects to local park and trail systems. Purchase and development of this trail was made possible by the Minnesota Environment and Natural Resources Trust Fund, the Legacy Amendment, Washington County, the City of Stillwater, and the Gateway-Brown's Creek Trail Association.",
        "landscape": "About two miles of the Brown's Creek State Trail are immediately adjacent to Brown's Creek, a designated trout stream with a dense broadleaf forest canopy. One mile of the trail corridor parallels the St. Croix River, with spectacular views of the National Scenic Riverway. This is Minnesota's only river in the federal Wild and Scenic Rivers system. The trail also passes by an audio listening station, historical markers and buildings and through local parks, golf courses, and a community with historical significance.",
        "permits": ["You will need a Horse Pass if you will be horseback riding or carriage driving.", "No other fees or passes are required to use the trail."],
        "parking": ["Laurel Street East in downtown Stillwater, at the eastern end of the trail.", "In Brown's Creek Nature Preserve, just south of the intersection of McKusick Road and Neal Avenue, halfway along the trail.", "In Grant, near Lake Masterman on State Highway 96, under the Gateway State Trail bridge."],
        "restrooms": ["1/4 mile south of the eastern end of the trail in downtown Stillwater, at the pedestrian walkway managed by the city.", "Seasonal portable bathroom in Brown's Creek Nature Preserve on Neal Avenue, halfway along the trail.", "Seasonal portable bathroom about 1/4 mile northeast of the western end of the trail, at the intersection of the Gateway State Trail and State Highway 96."],
        "winter": ["In the winter, the eastern portion of the trail between Laurel Street and Manning Avenue in Stillwater is plowed. The western portion between Manning Avenue in Stillwater and Duluth Junction in Grant is not maintained and can be used by bikers, hikers, snowshoers, and skiers."],
      "lat": 45.07179,
      "long": -92.85242,
      "map_latitude": 45.07179,
      "map_longitude": -92.85242,
      "map_zoom": 11,
      "created_at": 06/07/2023,
      "updated_at": 06/07/2023
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
