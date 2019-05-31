const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const includesSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

var addonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        min: 1,
        max: 3
    },
    cost: Number
}, {
        timestamps: true
    })
var sizeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        min: 1,
        max: 3
    },
    timeMeasurement: {
        type: String,
        enum: ['hours', 'minutes'],
        required: true
    },
    cost: Number,
    includes: [includesSchema],
    addons: [addonSchema]
}, {
        timestamps: true,
    });

var serviceSchema = new Schema({
    serviceName: {
        type: String,
        required: true
    },
    price: Number,
    duration: {
        type: String,
        enum: ['1 hour', '30 minutes', '2 hours', 'Custom']
    },
}, {
        timestamps: true,
    })

module.exports = mongoose.model('Service', serviceSchema);