const router = require('express').Router();
const {
  getTrails,
  getOneTrail,
} = require('../../controllers/trailController');

router.route('/all').get(getTrails); //working
router.route('/1').get(getOneTrail);

module.exports = router;