const applicationError = require("../error/application_error");


const errorHandler = (err, req, res, next) => {
    if(err instanceof applicationError) {
        res.status(err.statusCode).json(err.message);
    }
    res.status(500).json({error:'something went wrong! please try again later'});
}

module.exports = errorHandler;