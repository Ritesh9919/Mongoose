const User = require('../models/User');
const applicationError = require('../error/application_error');
const jwt = require('jsonwebtoken');

// signup user

const signup = async(req, res, next)=> {
  try {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if(user) {
        throw new applicationError('user already exist', 400);
    }
    await User.create({name, email, password});
    res.status(201).json({msg:'Signup successfull'});
  } catch (error) {
    next(error);
  }
}

//signin user

const signin = async(req, res, next)=> {
   try {
    const {email, password} = req.body;
    if(!email || !password) {
        throw new applicationError('Please provide both field', 400);
    }
    const user = await User.findOne({email});
    if(!user || user.password != password) {
        throw new applicationError('Invalid Credentials', 400);
    }

    const token = jwt.sign({userId:user._id}, 'jwtSecret', {expiresIn:'1h'});
    res.status(200).json({token:token});

   } catch (error) {
    next(error);
   }
}


module.exports = {
    signup,
    signin
}