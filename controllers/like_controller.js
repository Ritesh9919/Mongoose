const Like = require('../models/Like');
const Comment = require('../models/Comment');
const Post = require('../models/Post');


const toggleLike = async(req, res) => {
    const {id, type} = req.query;
    let likeable;
    let deleted = false;

    try {
        if(type == 'Post') {
            likeable = await Post.find({_id:id}).populate('likes');
        }else {
            likeable = await Comment.find({_id:id}).populate('likes');
        }

        // check if like already exist
        const isLikeExist = await Like.find({
            _id:id,
            onModel:type,
            user:req.user_id
        });

        // if alrrady exist then delele it
        if(isLikeExist) {
            likeable.likes.pull(likeable._id);
            await likeable.save();
            await isLikeExist.remove();
            deleted = true
        }else {
            let newLike = await Like.create({
                user:req.user._id,
                likeable:id,
                onModel:type
            });
            likeable.likes.push(newLike._id);
            await likeable.save()
            return res.json(200, {
                message:'Request successfull!',
                deleted:deleted
            })
        }
    } catch (error) {
        console.log(error);
    }


}

module.exports = {
    toggleLike
}