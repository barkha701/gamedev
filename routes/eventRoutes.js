'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const router = express.Router();

router.get('/events', eventControll.getAllEvents);
/*  getAllEvents api is for the 
event API that has the following model:
i. Event Name
ii. Event Starting time
iii. Event duration
*/
router.get('/event', eventControll.upcomingevent);
router.get('/event', eventControll.livewithin10mins);


module.exports = {
    routes: router
}