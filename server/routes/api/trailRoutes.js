const router = require('express').Router();
const {
  getTrails,
  getOneTrail,
} = require('../../controllers/trailController');

router.route('/').get(getTrails); //working
router.route('/:id').get(getOneTrail);

module.exports = router;