const router = require('express').Router();
const { Users, Posts, Comments } = require('../models');
const withAuth = require('../utils/auth');

//login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.findAll({ include: [{ model: Users }] });
    const posting = posts.map((msg) => msg.get({ plain: true }));
    res.render('home', {
      posting,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error displaying posts', error: err });
  }
});

router.get('/dashBoard', async (req, res) => {
  try {
    const dashData = await Users.findByPk(req.session.user_id, {
      include: [{ model: Posts }],
    });

    const dashes = dashData.get({ plain: true });
    const posts = dashes.posts;
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error not logged in', error: err });
  }
});

module.exports = router;
