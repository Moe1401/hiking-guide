const router = require('express').Router();
const session = require('express-session')

const userRoutes = require('./userRoutes');
const hikeRoutes = require('./hikeRoutes');
const trailRoutes = require('./trailRoutes');
// const commentRoutes = require('./commentRoutes');

router.use(session({secret: 'apple'}))

router.use('/user', userRoutes);
router.use('/hike', hikeRoutes);
router.use('/trail', trailRoutes);
// router.use('/comment', commentRoutes);

module.exports = router;
