const sequelize = require('../../config/connection')
const { User } = require('../models');

const userData = require('./userSeeds.json')

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    // await Dream.bulkCreate(dreamData);

    process.exit(0);
}

seedAll();