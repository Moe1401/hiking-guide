const lat = (settings = {}) => {
  return settings.lat || 46.4303749;
}

const lon = (settings = {}) => {
  return settings.lon || -94.6103113;
}

const zoom = (settings = {}) => {
  return settings.zoom || 9;
}

export const gMap = (settings = {}) => {
  return `https://www.google.com/maps/@${lat(settings)},${lon(settings)},${zoom(settings)}z`;
}

export const openStreetMap = (settings = {}) => {
  return `https://www.openstreetmap.org/#map=${zoom(settings)}/${lat(settings)}/${lon(settings)}`
}

export const sentinelMap = (settings = {}) => {
  return `https://apps.sentinel-hub.com/sentinel-playground/?source=S2L2A&lat=${lat(settings)}&lng=${lon(settings)}&zoom=${zoom(settings)}`;
}
