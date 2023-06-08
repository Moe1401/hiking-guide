const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const hikeRoutes = require('./hikeRoutes');
const trailRoutes = require('./trailRoutes');
// const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
// router.use('/hike', hikeRoutes);
router.use('/trail', trailRoutes);
// router.use('/comment', commentRoutes);

module.exports = router;
