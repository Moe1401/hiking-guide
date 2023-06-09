const Trail = require('../models/Trail');

// Get all Trails
function getTrails(req, res) {
  Trail.find()
    .then((trail) => res.json(trail))
    .catch((err) => res.status(500).json(err));
}

const getOneTrail = async (req, res) => {
  try {
    const selectedTrail = await Trail.findById(req.params.id);
    res.json(selectedTrail);
  } catch (error) {
    console.log("Error fetching trails:", error);
    res.status(500).json({ error: "Internal server error"});
  }
};

module.exports = { getTrails, getOneTrail };