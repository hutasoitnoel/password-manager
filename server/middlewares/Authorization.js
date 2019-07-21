const Password = require('../models/password')

module.exports = (req, res, next) => {
    Password
        .findOne({ _id: req.params.id })
        .then(password => {
            if (password.userId.toString() === req.decoded._id.toString()) {
                next();
            } else {
                res.status(403).json({ err: 'Forbidden' });
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}
