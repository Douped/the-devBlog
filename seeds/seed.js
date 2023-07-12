const sequelize = require('../config/connection');
const { Users, Posts, Comments } = require('../models');

const userData = require('./userSeed');
const postData = require('./postSeed');
const commentData = require('./commentSeed');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  try {
    await Users.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await Posts.bulkCreate(postData);
    await Comments.bulkCreate(commentData);
    console.log('Seeded Successfully!');
  } catch (err) {
    console.error(err);
  }
  process.exit(0);
};

seedDatabase();
