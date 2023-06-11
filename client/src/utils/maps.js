const lat = (settings = {}) => {
  return settings.lat || 46.4303749;
}

const lon = (settings = {}) => {
  return settings.lon || -94.6103113;
}

const zoom = (settings = {}) => {
  return settings.zoom || 9;
}

const embedWidth = (settings = {}) => {
  return settings.embedWidth || 300;
}

const embedHeight = (settings = {}) => {
  return settings.embedHeight || 300;
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

// export const openStreetMapEmbed = (settings = {}) => {
//   return `<iframe id="inlineFrameExample"
//     title="Inline Frame Example"
//     width="${embedWidth(settings)}"
//     height="${embedHeight(settings)}"
//     src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
//   </iframe>`
// }
