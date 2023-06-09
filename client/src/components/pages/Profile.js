import React, { useState, useEffect } from 'react';
import ProfileHike from './Profile/ProfileHike';

export default function Profile() {
  const [ userData, setUserData ] = useState("");
  const [hikes, setHikes] = useState([]);
  const [hikedAt, setHikedAt] = useState(null);
  const [distance, setDistance] = useState(null);
  const [goalDistance, setGoalDistance] = useState(null);
  const [trails, setTrails] = useState([]);
  const [trail, setTrail] = useState(null);

  const total_distance = (hikes) => {
    return hikes.map((hike) => hike.distance ).reduce(function (total, elem) { return total + elem });
  }

  const average_distance_per_day = (hikes, account_age_in_days) => {
    return total_distance(hikes) / account_age_in_days;
  }

  const average_distance_per_hike = (hikes) => {
    return total_distance(hikes) / hikes.length;
  }

  const fetchUserData = async () => {
    const profile_id = "647e11311ba1d11e7e07d227";
    fetch(`/api/user/${profile_id}`)
      .then((res) => res.json())
      .then((data) => {
        data.total_distance = total_distance(hikes);
        data.average_distance_per_day = average_distance_per_day(hikes, data.account_age_in_days);
        data.average_distance_per_hike = average_distance_per_hike(hikes);
        setUserData(data);
        console.log(data);
    });
  }

  const addHike = async () => {
    try {
      await fetch('/api/hike', {
        method: 'POST',
        body: JSON.stringify({
          trail_id: trail,
          hiked_at: hikedAt,
          distance: Number(distance),
          goal_distance: Number(goalDistance)
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      fetchHikes();
      setTrail("");
      setDistance("");
      setGoalDistance("");
      setHikedAt("");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchHikes();
    fetchTrails();
    fetchUserData();
  }, []);

  const fetchHikes = async () => {
    try {
      const response = await fetch('/api/hike');
      const data = await response.json();
      setHikes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTrails = async () => {
    try {
      const response = await fetch('/api/trail');
      const data = await response.json();
      setTrails(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTrailName = id => trails.find(trail => trail._id === id)?.trail

  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        welcome to your profile!
      </p>
      <p>{userData.username}</p>
      <p>Number of Hikes: {userData.total_hikes}</p>
      <p>Total Distance: {userData.total_distance}</p>
      <p>Average Distance Per Hike: {userData.average_distance_per_hike}</p>
      <p>Average Distance Per Day: {userData.average_distance_per_day}</p>
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
        <button type="button" onClick={addHike}>
          Add Hike
        </button>
      </div>
    </div>
  );
}
