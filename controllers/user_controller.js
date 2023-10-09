const User = require('../models/User');
const applicationError = require('../error/application_error');

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

const signin = (req, res)=> {

}


module.exports = {
    signup,
    signin
}