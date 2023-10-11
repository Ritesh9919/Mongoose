const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:'on_model'
    },
    on_model:{
        type:String,
        enum:['Comment', 'Post']
    }
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;