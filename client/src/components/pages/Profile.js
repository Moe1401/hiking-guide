import React, { useState, useEffect } from 'react';
import ProfileHike from './Profile/ProfileHike';

export default function Profile(props) {
  const [ userData, setUserData ] = useState("");
  const [hikes, setHikes] = useState([]);
  const [hikedAt, setHikedAt] = useState(null);
  const [distance, setDistance] = useState(null);
  const [goalDistance, setGoalDistance] = useState(null);
  const [trails, setTrails] = useState([]);
  const [trail, setTrail] = useState(null);
  const [ totalDistance, setTotalDistance ] = useState(0);
  const [ aveDistanceDay, setAveDistanceDay ] = useState(0);
  const [ aveDistanceHike, setAveDistanceHike ] = useState(0);

  const total_distance = (hikes) => {
    if(hikes.length){
      return hikes.map((hike) => hike.distance ).reduce(function (total, elem) { return total + elem });
    }
    return 0;
  }

  const average_distance_per_day = (hikes, account_age_in_days) => {
    if (hikes.length && account_age_in_days){
      return total_distance(hikes) / account_age_in_days;
    }
    return 0;
  }

  const average_distance_per_hike = (hikes) => {
    if (hikes.length){
      return total_distance(hikes) / hikes.length;
    }
    return 0;
  }

  const addHike = (e) => {
    e.preventDefault();
    const addHikeCall = new Promise( async (resolve, reject) => {
      if (trail && Number(distance) && Number(goalDistance) && hikedAt){
        const response = await fetch('/api/hike', {
          method: 'POST',
          body: JSON.stringify({
            trail_id: trail,
            hiked_at: hikedAt,
            distance: Number(distance),
            goal_distance: Number(goalDistance)
          }),
          headers: { 'Content-Type': 'application/json' }
        })
        resolve(response.body)
      } else {
        console.log("All fields are required for a hike!")
      }
    })  
    Promise.all([addHikeCall]).then( values => {
      setTrail("");
      setDistance("");
      setGoalDistance("");
      setHikedAt("");
      processData();
      return delay(1000).then(function() {
        return processData();
      });
    }) 
  }

  const delay = (t, val) => {
    return new Promise(resolve => setTimeout(resolve, t, val));
  }

  const processData = () => {
    const fetchUserData = new Promise( async (resolve, reject) => {
      const profile_id = props.userId;
      const response = await fetch(`/api/user/${profile_id}`)
      resolve(response.json())
    })
  
    const fetchHikeData = new Promise( async (resolve, reject) => {
      const response = await fetch('/api/hike');
      resolve(response.json())
    })
  
    const fetchTrailData = new Promise( async (resolve, reject) => {
      const response = await fetch('/api/trail');
      resolve(response.json())
    })
    
    const allData = Promise.all([fetchHikeData, fetchTrailData, fetchUserData]).then( values => {
      const hikeData = values[0]
      const trailData = values[1]
      const userData2 = values[2]
      setHikes(hikeData);
      setTrails(trailData)
      setUserData(userData2);
      setTotalDistance(total_distance(hikeData));
      setAveDistanceDay(average_distance_per_day(hikeData, userData2.account_age_in_days));
      setAveDistanceHike(average_distance_per_hike(hikeData));
    }) 
  }


  useEffect(() => {
    processData();
    return () => {};
  }, []);

  const getTrailName = id => trails.find(trail => trail._id === id)?.trail

  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        welcome to your profile!
      </p>
      <p>{userData.username}</p>
      <p>Number of Hikes: {hikes.length}</p>
      <p>Total Distance: {totalDistance}</p>
      <p>Average Distance Per Hike: {aveDistanceHike}</p>
      <p>Average Distance Per Day: {aveDistanceDay}</p>
      <div>
        <ul>
          {hikes && hikes.map(hike => <ProfileHike key={hike._id} hike={hike} getTrailName={getTrailName} />)}
        </ul>
      </div>
      <div>
        <label>
          Trail
        </label>
        <select value={trail} onChange={e => setTrail(e.target.value)}>
          <option value="">Select an trail</option>
          {trails.map(trail => (
            <option key={trail._id} value={trail._id}>
              {trail.trail}
            </option>
          ))}
        </select>
        <label>
          Hiked at
        </label>
        <input type="date" value={hikedAt} onChange={e => setHikedAt(e.target.value)} />
        <label>
          Distance
        </label>
        <input type="number" value={distance} onChange={e => setDistance(e.target.value)} />
        <label>
          Goal Distance
        </label>
        <input type="number" value={goalDistance} onChange={e => setGoalDistance(e.target.value)} />
        <button type="button" onClick={e => addHike(e)}>
          Add Hike
        </button>
      </div>
    </div>
  );
}
