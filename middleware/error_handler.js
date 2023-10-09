const applicationError = require("../error/application_error");


const errorHandler = (err, req, res, next) => {
    if(err instanceof applicationError) {
        return res.status(err.statusCode).json({error:err.message});
    }
    return res.status(500).json({error:'something went wrong! please try again later'});
}

module.exports = errorHandler;