const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var apptSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: 'Service'
    },
    time: {
        type: String,
        unique: true
    },
    date: Date
}, {
    timestamps: true
});


module.exports = mongoose.model('Appointment', apptSchema);

