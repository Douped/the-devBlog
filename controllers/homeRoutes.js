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
  res.render('home', { logged_in: req.session.logged_in });
});

router.get('/dashBoard', async (req, res) => {
  console.log(req.query.id);

  res.render('homepage', {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
