const { verify } = require('../helpers/jwt')
const User = require('../models/user')

module.exports = (req, res, next) => {
    try {
        const verified = verify(req.headers.token)
        User.findOne({ username: verified.username })
            .then((found) => {
                if (found) {
                    req.decoded = verified
                    next()
                } else {
                    res.status(401).json({
                        error: 'Authentication ERROR'
                    })
                }
            })
            .catch(err => {
                res.status(401).json({
                    error: 'Authentication ERROR'
                })
            })
    } catch (err) {
        res.status(401).json({
            error: 'Authentication ERROR'
        })
    }
}