const router = require('express').Router();
const {
  getHikes,
  addOneHike,
} = require('../../controllers/hikeController');

router.route('/').get(getHikes);
router.route('/').post(addOneHike);

module.exports = router;