import {gMap, sentinelMap} from "../../../utils/maps"

function ProfileHike(props) {
  return(
    <li>
      You hiked <strong>{props.getTrailName(props.hike.trail_id)}</strong> on {props.hike.hiked_at} for {props.hike.distance} out of {props.hike.goal_distance}.
      <ul>
        <li>
          <a href={gMap({})} target="_blank" rel="noreferrer noopener">Google Maps</a>
        </li>
        <li>
          <a href={sentinelMap({})} target="_blank" rel="noreferrer noopener">Sentinel Maps</a>
        </li>
      </ul>
    </li>
  )
}

export default ProfileHike;
