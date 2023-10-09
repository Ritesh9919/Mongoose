const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');
router.post('/create', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getSingalPost);
router.put('/update/:id', postController.updatePost);
router.delete('/delete/:id', postController.deletePost);

module.exports = router;