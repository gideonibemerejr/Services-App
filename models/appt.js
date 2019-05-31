const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const apptSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: 'Service'
    },
    date: Date
}, {
        timestamps: true
    });


module.exports = mongoose.model('Appointment', apptSchema);

