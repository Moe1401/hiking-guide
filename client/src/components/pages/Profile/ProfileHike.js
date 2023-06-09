import {gMap, sentinelMap} from "../../../utils/maps"

function ProfileHike(props) {
  return(
    <div style={{border: "1px solid red"}}>
      <p>Trail: {props.hike.trail_id}</p>
      <p>Goal: {props.hike.goal_distance}</p>
      <p>Distance Hiked: {props.hike.distance}</p>
      <p>
        <a href={gMap({})} target="_blank" rel="noreferrer noopener">Google Maps</a>
      </p>
      <p>
        <a href={sentinelMap({})} target="_blank" rel="noreferrer noopener">Sentinel Maps</a>
      </p>
    </div>
  )
}

export default ProfileHike;