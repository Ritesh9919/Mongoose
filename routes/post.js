const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');
const authentication = require('../middleware/auth');
router.post('/create', authentication, postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getSingalPost);
router.put('/update/:id', authentication, postController.updatePost);
router.delete('/delete/:id', authentication, postController.deletePost);

module.exports = router;