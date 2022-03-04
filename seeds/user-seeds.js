const { User } = require('../models');

const userData = [{
    username: 'Caleb',
    password: 'Pass1'
},
{
    username: 'Stella',
    password: 'Pass2'
},
{
    username: 'Xavyr',
    password: 'Pass3'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
