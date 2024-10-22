const express = require('express');
const router = express.Router();
const earthquakeController = require('../controllers/earthquakeController');

router.get('/earthquake', earthquakeController.getEarthquakeData);

module.exports = router;