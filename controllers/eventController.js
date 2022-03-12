'use strict';

const eventData = require('../data/events');

const getAllEvents = async (req, res, next) => {
    try {
//3 a. 
        const eventlist = await eventData.getEvents();
        res.send(eventlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const upcomingevent = async (req, res, next) => {
    try {
        //3.b (i)
        const event = await eventData.upcomingevent();
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const livewithin10mins = async (req, res, next) => {
    try { //3b. (ii)
        const eventId =  req.params.id;
        const data = req.body;
        const updated = await eventData.livewithin10mins(eventId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getAllEvents,
    upcomingevent,
    livewithin10mins,
    
}