require('dotenv').config();
require('./config/database');
const Service = require('./models/service');
const User = require('./models/user');
const data = require('./data');

const p1 = Service.deleteMany({});
const p2 = User.deleteMany({});

Promise.all([p1, p2])
    .then(results => {
        return Service.create(data.services);
    })
    .then(services => {
        return User.create(data.users);
    })
    .then(users => {
        return Promise.all([
            Service.findOne({ name: 'Basic Detail' }),
            User.findOne({ isAdmin: true })
        ]).catch(err => {
            console.log(err);
        });
    })
    .then(() => {
        process.exit();
    })
