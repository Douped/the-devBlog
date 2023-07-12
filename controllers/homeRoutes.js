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
    console.log(posts);
    const posting = posts.map((msg) => msg.get({ plain: true }));

    console.log('posting:', posting);

    res.render('home', {
      posting,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error displaying posts', error: err });
  }
});

router.get('/dashBoard', async (req, res) => {
  console.log(req.query.id);

  res.render('homepage', {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
