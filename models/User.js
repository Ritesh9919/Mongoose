const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:[25, "Name can't be greater than 25 characters"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/.+\@.+\../, "Please enter a valid email"]
    },
    password:{
        type:String,
        required:true,
        validate:{
            validator:function(value) {
                return /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(value)
            },
            message:"Password should be between 8-12 charachetrs and have a special character"
        }
    }

});

const User = mongoose.model('User', userSchema);
module.exports = User;