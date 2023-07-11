const sequelize = require('../config/connection');
const { Users, Posts, Comments } = require('../models');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });
//   //seed modules
//   const modules = await Modules.bulkCreate(moduleData, {
//     individualHooks: true,
//     returning: true,
//   });
//   const posts = await posts.bulkCreate(topicData, {
//     individualHooks: true,
//     returning: true,
//   });
//   const users = await Users.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });
//   const comments = await Comments.bulkCreate(commentData, {});
//   process.exit(0);
// };

// seedDatabase();
