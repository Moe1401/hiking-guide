import JsxParser from 'react-jsx-parser'
import {gMap, openStreetMap, sentinelMap, gMapEmbed, openStreetMapEmbed} from "../../../utils/maps"

function ProfileHike(props) {
  const trailName = props.trailData?.trail

  const map_settings = {
    lat: props.trailData?.map_latitude,
    lon: props.trailData?.map_longitude,
    zoom: props.trailData?.map_zoom,
  }

  const GMapComponent = () => (
    <JsxParser
      bindings={{}}
      components={{}}
      jsx={gMapEmbed(map_settings)}
    />
  )

  const OSMapComponent = () => (
    <JsxParser
      bindings={{}}
      components={{}}
      jsx={openStreetMapEmbed(map_settings)}
    />
  )

  return(
    <li>
      You hiked <strong>{trailName}</strong> on {props.hike.hiked_at} for {props.hike.distance} out of {props.hike.goal_distance}.
      <ul>
        <li>
          <a href={gMap({})} target="_blank" rel="noreferrer noopener">Google Maps</a>
        </li>
        <li>
          <a href={openStreetMap({})} target="_blank" rel="noreferrer noopener">OpenStreetMap</a>
        </li>
        <li>
          <a href={sentinelMap({})} target="_blank" rel="noreferrer noopener">SentinelHub Play</a>
        </li>
        <li>
          <GMapComponent />
        </li>
        <li>
          <OSMapComponent />
        </li>
      </ul>
    </li>
  )
}

export default ProfileHike;
