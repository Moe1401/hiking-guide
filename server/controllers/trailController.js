const Trail = require('../models/Trail');

// Get all Trails
function getTrails(req, res) {
  console.log("you are here");
  Trail.find()
    .then((trails) => res.json(trails))
    .catch((err) => res.status(500).json(err));
}

const getOneTrail = async (req, res) => {
  try {
    const selectedTrail = await Trail.find({ trail: 'Blazing Star State Trail' });
    res.json(selectedTrail);
  } catch (error) {
    console.log("Error fetching trails:", error);
    res.status(500).json({ error: "Internal server error"});
  }
};

module.exports = { getTrails, getOneTrail };