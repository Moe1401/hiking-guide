const DEFAULT_LAT = 46.4303749;
const DEFAULT_LON = -94.6103113;
const DEFAULT_ZOOM = 9;
const DEFAULT_EMBED_WIDTH = 300;
const DEFAULT_EMBED_HEIGHT = 300;

const lat = (settings = {}) => {
  return settings.lat || DEFAULT_LAT;
}

const lon = (settings = {}) => {
  return settings.lon || DEFAULT_LON;
}

const zoom = (settings = {}) => {
  return settings.zoom || DEFAULT_ZOOM;
}

const embedWidth = (settings = {}) => {
  return settings.embedWidth || DEFAULT_EMBED_WIDTH;
}

const embedHeight = (settings = {}) => {
  return settings.embedHeight || DEFAULT_EMBED_HEIGHT;
}

const convertDegRad = (deg) => {
  return deg * Math.PI / 180;
}

// Pulled from https://gist.github.com/pianosnake/b4a45ef6bdf2ffb2e1b44bbcca107298
const bbox = (settings = {}) => {
  const metersPerPixelEW = 40075016.686 / Math.pow(2, zoom(settings) + 8);
  const metersPerPixelNS = 40075016.686 / Math.pow(2, zoom(settings) + 8) * Math.cos(convertDegRad(lat(settings)));

  const shiftMetersEW = embedWidth(settings)/2 * metersPerPixelEW;
  const shiftMetersNS = embedHeight(settings)/2 * metersPerPixelNS;

  const shiftDegreesEW = shiftMetersEW * 360 / 40075016.686;
  const shiftDegreesNS = shiftMetersNS * 360 / 40075016.686;

  return { lat1: lat(settings)+shiftDegreesNS, lat2: lat(settings)-shiftDegreesNS, lon1: lon(settings)-shiftDegreesEW, lon2: lon(settings)+shiftDegreesEW };
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

export const gMapEmbed = (settings = {}) => {
  return `<iframe id="gMap"
    title="GMap"
    width="${embedWidth(settings)}"
    height="${embedHeight(settings)}"
    scrolling="no"
    src="https://maps.google.com/maps?width=200&height=200&hl=en&q=${lat(settings)},${lon(settings)}+(Trail%20Head)&t=&z=${zoom(settings)}&ie=UTF8&iwloc=B&output=embed">
  </iframe>`;
}

export const openStreetMapEmbed = (settings = {}) => {
  const {lat1,lat2,lon1,lon2} = bbox(settings)
  return `<iframe id="openStreetMap"
    title="OpenStreetMap"
    width="${embedWidth(settings)}"
    height="${embedHeight(settings)}"
    src="https://www.openstreetmap.org/export/embed.html?bbox=${lon1}%2C${lat1}%2C${lon2}%2C${lat2}&layer=mapnik">
  </iframe>`
}
