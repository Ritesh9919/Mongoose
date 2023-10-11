const Comment = require('../models/Comment');
const Post = require('../models/Post');

const createComment = async (req, res) => {
    console.log(req.user);
    try {
        const { content, post } = req.body;
        const posts = await Post.findById(post);
        if (posts) {
            const comment = await Comment.create({
                content: content,
                user: req.user._id,
                post: post
            });
            
            posts.comments.push(comment);
            await posts.save();
            res.status(201).json({ msg: 'Comment created' });

        }

    } catch (error) {
        console.log(error);
    }

}



const getAllComments = (req, res) => {

}


const getSingalComment = (req, res) => {

}

const updateComment = (req, res) => {

}

const deleteComment = (req, res) => {

}

module.exports = {
    createComment,
    getAllComments,
    getSingalComment,
    updateComment,
    deleteComment
}