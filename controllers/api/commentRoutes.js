const router = require('express').Router();
const { Users, Posts, Comments } = require('../../models');
const withAuth = require('../../utils/auth');
//add a comment to a topic
router.post('/:id', withAuth, async (req, res) => {});

//delete a comment
router.delete('/:id', withAuth, async (req, res) => {});

//update a comment
router.put('/:id', withAuth, async (req, res) => {});

module.exports = router;
