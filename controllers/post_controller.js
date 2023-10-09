
const Post = require('../models/Post');
const applicationError = require('../error/application_error');

const createPost = async (req, res) => {
    try {
        const { content } = req.body;
        await Post.create({
            content: content,
            user: req.user._id

        });

        res.status(201).json({ msg: 'Post created' });

    } catch (error) {
        console.log(error);

    }

}


const getAllPosts = async(req, res) => {
   try {
    const posts = await Post.find({});
    res.status(200).json({posts, length:posts.length});
   } catch (error) {
     console.log(error);

   }
}


const getSingalPost = (req, res) => {

}

const updatePost = (req, res) => {

}


const deletePost = (req, res) => {

}


module.exports = {
    createPost,
    getAllPosts,
    getSingalPost,
    updatePost,
    deletePost
}