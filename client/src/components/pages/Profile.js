import React, {useState, useEffect} from 'react';
import ProfileHike from './Profile/ProfileHike';

export default function Profile() {
  const [ userData, setUserData ] = useState("");

  const total_distance = (hikes) => {
    return hikes.map((hike) => hike.distance ).reduce(function (total, elem) { return total + elem });
  }

  const average_distance_per_day = (hikes, account_age_in_days) => {
    return total_distance(hikes) / account_age_in_days;
  }

  useEffect(()=> {
    const profile_id = "647e11311ba1d11e7e07d227";
    fetch(`/api/user/${profile_id}`)
      .then((res) => res.json())
      .then((data) => {
        data.total_distance = total_distance(data.hikes);
        data.average_distance_per_day = average_distance_per_day(data.hikes, data.account_age_in_days);
        setUserData(data);
        console.log(data);
      });
  }, [])


  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        welcome to your profile!
      </p>
      <p>{userData.username}</p>
      <p>Number of Hikes: {userData.total_hikes}</p>
      <p>Total Distance: {userData.total_distance}</p>
      <p>Average Distance Per Day: {userData.average_distance_per_day}</p>
      <p>
        {userData.hikes && userData.hikes.map((hike) => <ProfileHike key={hike._id} hike={hike} />)}
      </p>
    </div>
  );
}
