import React, {useState, useEffect} from 'react';
import ProfileHike from './Profile/ProfileHike';

export default function Profile() {
  const [ userData, setUserData ] = useState("");

  useEffect(()=> {
    const profile_id = "647e11311ba1d11e7e07d227";
    fetch(`/api/user/${profile_id}`)
      .then((res) => res.json())
      .then((data) => {
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
      <p>
        {userData.hikes.map((hike) => <ProfileHike key={hike._id} hike={hike} />)}
      </p>
    </div>
  );
}
