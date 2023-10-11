const Comment = require('../models/Comment');
const Post = require('../models/Post');

const createComment = async (req, res) => {
    const { content, post } = req.body;
    try {

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



const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({});
        res.status(200).json({ comments });
    } catch (error) {
        console.log(error);
    }
}


const getSingalComment = async(req, res) => {
    const {id} = req.params;
    try {
       const comment = await Comment.findOne({post:id});
       res.status(200).json({comment});
    } catch (error) {
  console.log(error);
    }
}

const updateComment = async(req, res) => {
    const {id} = req.params;
    const {content} = req.body;
   try {
    await Comment.findOneAndUpdate({_id:id}, {$set:{content:content}});
    res.status(200).json({msg:'comment updated successfully'});
   } catch (error) {
    console.log(error);
   }
}

const deleteComment = async(req, res) => {
  const {id} = req.params;
  try {
    await Comment.findOneAndDelete({_id:id});
     res.status(200).json({msg:'Comment deleted'});
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
    createComment,
    getAllComments,
    getSingalComment,
    updateComment,
    deleteComment
}