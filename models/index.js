const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');

// users have many posts
Users.hasMany(Posts, {
  foreignKey: 'user_id',
});
// users have many comments
Users.hasMany(Comments, {
  foreignKey: 'user_id',
});
// posts belong to users
Posts.belongsTo(Users, {
  foreignKey: 'user_id',
});
// posts have many comments
Posts.hasMany(Comments, {
  foreignKey: 'post_id',
});
// comments belong to users and posts
Comments.belongsTo(Users, {
  foreignKey: 'post_id',
});
Comments.belongsTo(Posts, {
  foreignKey: 'post_id',
});

module.exports = { Users, Posts, Comments };
