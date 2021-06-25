const config  = require('config');
const jwt = require('jsonwebtoken');
const {User} = require('../models/user');

async function validataProduct(req,res,next) {
    let token = req.header('x-auth-token');
    if(!token) return res.status(400).send("token not provided");
    try {
        let user = jwt.verify(token, config.get('jwtkey'));
        req.user = await User.findById(user._id);
    } catch (error) {
        return res.status(400).send('Token is correct');
        
    }
    
    next();
}

module.exports = validataProduct;