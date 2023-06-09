import React, { useState, useEffect } from 'react';


export default function Profile() {
  const [hikes, setHikes] = useState([]);
  const [hikedAt, setHikedAt] = useState(null);
  const [distance, setDistance] = useState(null);
  const [goalDistance, setGoalDistance] = useState(null);
  const [trails, setTrails] = useState([]);
  const [trail, setTrail] = useState(null);

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
      <div>
        <ul>
          {hikes.map(hike => (
            <li key={hike._id}>
              You hiked <strong>{getTrailName(hike.trail_id)}</strong> on {hike.hiked_at} for {hike.distance} out of {hike.goal_distance}.
            </li>
          ))}
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
