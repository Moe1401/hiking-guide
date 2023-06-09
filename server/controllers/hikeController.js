const Hike = require('../models/Hike');

// Get all Hikes
function getHikes(req, res) {
  console.log("you are here");
  Hike.find({user_id: req.session.user_id})
    .then((Hike) => res.json(Hike))
    .catch((err) => res.status(500).json(err));
}

const addOneHike = async (req, res) => {
  try {
    await Hike.create({...req.body, user_id: req.session.user_id});
    res.status(204).send();
  } catch (error) {
    console.log("Error fetching Hikes:", error);
    res.status(500).json({ error: "Internal server error"});
  }
};

module.exports = { getHikes, addOneHike };