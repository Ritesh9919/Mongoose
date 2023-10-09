const jwt = require('jsonwebtoken');
const applicationError = require('../error/application_error');
const User = require('../models/User');

const auth = async(req, res, next) => {
  const token = req.headers['authorization'];
  
  if(!token) {
    throw new applicationError('Unauthorized', 501);
  }

  let payload;
  try {
    payload = jwt.verify(token, 'jwtSecret');
  } catch (error) {
    throw new applicationError('Unauthorized', 501);
  }
   
  const user = await User.findById(payload.userId);
  
  req.user = user;
  next()
}


module.exports = auth;