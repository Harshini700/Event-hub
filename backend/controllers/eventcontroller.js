const CollegeEvent = require('../models/collegeevent');

// Fetch all events
const getEvents = async (req, res) => {
    try {
        const events = await CollegeEvent.find().limit(20); // Fetch max 20 events
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error: error.message });
    }
};

// Add a new event
const addEvent = async (req, res) => {
    try {
        const { eventName, collegeName, city, course, date, description } = req.body;

        const newEvent = new CollegeEvent({
            eventName,
            collegeName,
            city,
            course,
            date,
            description,
        });

        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(400).json({ message: 'Error adding event', error: error.message });
    }
};

module.exports = { getEvents, addEvent };
