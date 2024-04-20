const { User } = require('../models');

const userData = [
  {
    username: 'mike',
    password: 'password01',
  },
];

const seedUsers = async () => {
  //UserRecord.bulkCreate(userRecordData);
  for (const user of userData) {
    await User.create(user);
  }
};

module.exports = seedUsers;
