var express = require('express');
var router = express.Router();
var {User} = require('../../models/user');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middlewares/auth');

var _ = require('lodash');

/* GET home page. */
router.post('/register', async function(req, res, next) {
    let user = await User.findOne({email:req.body.email});
    if(user) return res.status(400).send('already used...');
    user  = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    await user.genetateHashedPassword();
    await user.save();
    return res.send(_.pick(user, ['name', 'email']));

});

router.post('/login',async function(req, res, next) {
    let user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send('Email is not exists');
    let isValid = await bcrypt.compare(req.body.password, user.password);
    if(!isValid) return res.status(400).send("Password is incorrect");
    const token = jwt.sign({_id: user._id, name:user.name}, config.get('jwtkey'));
    return res.send(token);
});

module.exports = router;
