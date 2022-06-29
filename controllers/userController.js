const User = require('../models/User');

// @desc create new user
// @route POST /api/user
// @access
const createUser = async(req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const result = await user.save();
    res.send(result);
}

module.exports = createUser;
