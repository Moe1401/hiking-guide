const Trail = require('../models/Trail');

const getTrails = async (req, res) => {
  try {
    const selectedTrail = await Trail.findOne({ trail_name: 'Blazing Star State Trail' });
    res.json(selectedTrail);
  } catch (error) {
    console.log("Error fetching trails:", error);
    res.status(500).json({ error: "Internal server error"});
  }
};

module.exports = { getTrails };