const express = require('express');
const router = express.Router();
const playerProfileController = require('../controllers/playerProfileController');

router.get('/editPlayer', playerProfileController.getEditPlayer);

// API to handle playerDetails submission
router.post('/api/playerProfiles', playerProfileController.postAddPlayer);

// API to fetch playerDetails 
router.get('/playerDetails', playerProfileController.getPlayerDetails);

// API to Update playerDetails
router.post('/editPlayerDetails', playerProfileController.postEditPlayer);

module.exports = router;
