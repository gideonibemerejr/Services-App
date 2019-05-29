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
    price: {
        time: {
            type: Number,
            min: 1,
            max: 3
        },
        cost: Number
    },
}, {
        timestamps: true
    })
var sizeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        time: {
            type: Number,
            min: 1,
            max: 3
        },
        cost: Number
    },
    includes: [includesSchema],
    addons: [addonSchema]
}, {
        timestamps: true,
    });

var serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sizes: [sizeSchema],
}, {
        timestamps: true,
    })

module.exports = mongoose.model('Service', serviceSchema);