const Appt = require('../models/appt');
const Service = require('../models/service');
const User = require('../models/user');

module.exports = {
    newAppt,
    create
}

function newAppt(req, res) {
    if (req.user) {
        Service.find({}, (err, services) => {
            res.render('appts/new', {
                title: "New Appointment",
                services,
                user: req.user
            })
        })
    } else {
        res.redirect('/login');
    }

}

function create(req, res) {
    let apptData = req.body;
    apptData.user = req.params.id;
    apptData.service = req.body.service;
    let appointment = new Appt(apptData);
    appointment.save();
    let aId = appointment._id;

    User.findById(req.params.id, (err, user) => {
        user.appointments.push(aId);
        console.log(user);
        user.save();
    });
    res.redirect('/');
    // User.updateOne({ _id: req.params.id }, (err, user, next) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     user.email = req.body.email
    //     user.phone = req.body.phone;
    //     console.log(user);
    // })


}