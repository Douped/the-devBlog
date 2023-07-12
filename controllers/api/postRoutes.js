const router = require('express').Router();
const { Posts } = require('../../models/index');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const content = req.body.content;
    const title = req.body.title;
    const userPost = await Posts.create({
      title: title,
      content: content,
      user_id: req.session.user_id,
    });
    res.status(200).json(userPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Posts.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      postData;
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    err;
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Posts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
