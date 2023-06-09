function ProfileHike(props) {
  return(
    <div style={{border: "1px solid red"}}>
      <p>Trail: {props.hike.trail_id}</p>
      <p>Goal: {props.hike.goal_distance}</p>
      <p>Distance Hiked: {props.hike.distance}</p>
    </div>
  )
}

export default ProfileHike;