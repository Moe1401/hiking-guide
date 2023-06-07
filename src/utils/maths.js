// Haversine formula adapted from: https://www.movable-type.co.uk/scripts/latlong.html
export const haversine = (lat1, lon1, lat2, lon2) => {
  const R_Earth = 6371e3; // Earth radius in meters
  const meters_per_mile = 1609.34;

  const phi1 = lat1 * Math.PI/180;
  const phi2 = lat2 * Math.PI/180;
  const delta_phi = (lat2-lat1) * Math.PI/180;
  const delta_lambda = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(delta_phi/2) * Math.sin(delta_phi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(delta_lambda/2) * Math.sin(delta_lambda/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R_Earth * c / meters_per_mile;
}
