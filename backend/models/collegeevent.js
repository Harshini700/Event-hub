const mongoose = require('mongoose');

const collegeEventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    collegeName: { type: String, required: true },
    city: { type: String, required: true },
    course: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
});

const CollegeEvent = mongoose.model('CollegeEvent', collegeEventSchema);

module.exports = CollegeEvent;
