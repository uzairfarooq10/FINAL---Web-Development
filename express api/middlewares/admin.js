// const config  = require('config');
// const jwt = require('jsonwebtoken');
// const {user} = require('../models/user');

async function auth(req,res,next) {
    if(req.user.role != "admin")
        return res.status(403).send("You are not admin");
    next();
}

module.exports = auth;