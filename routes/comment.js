const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment_controller');
const authentication = require('../middleware/auth');
router.post('/', authentication, commentController.createComment);
router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getSingalComment);
router.put('/:id', authentication, commentController.updateComment);
router.delete('/:id', authentication, commentController.deleteComment);


module.exports = router;