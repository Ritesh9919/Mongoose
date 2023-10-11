
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


const getSingalPost = async(req, res) => {
   try {
      const {id} = req.params;
      const post = await Post.findById(id);
      res.status(200).json({post});
   } catch (error) {
     console.log(error);
   }


}

const updatePost = async(req, res) => {
   try {
    const {content} = req.body;
    const {id} = req.params;
    const post = await Post.findOneAndUpdate({_id:id}, {$set:{content:content}});
    res.status(200).json({msg:'Post updated successfully'});

   } catch (error) {
    console.log(error);
   }
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