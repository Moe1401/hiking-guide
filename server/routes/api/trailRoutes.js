const express = require('express');
const router = express.Router();
const trailController = require('../../controllers/trailController');

router.get('/trails' , trailController.getTrails);
console.log(router);
module.exports = router;