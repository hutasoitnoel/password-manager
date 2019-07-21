const User = require('../models/user')
const bcrypt = require('../helpers/bcrypt')
const jwt = require('../helpers/jwt')

class UserController {
    static register(req, res) {
        const { username, password } = req.body
        User
            .create({ username, password })
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static login(req, res) {
        const { username, password } = req.body
        User
            .findOne({ username })
            .then(user => {
                if (user) {
                    if (bcrypt.compare(password, user.password)) {
                        const myToken = jwt.sign({
                            _id: user._id,
                            username: user.username
                        })
                        res.status(200).json({
                            token: myToken,
                            username: user.username
                        })
                    } else {
                        res.status(400).json('Wrong username / password')
                    }
                } else {
                    res.status(400).json(`Wrong username / password`)
                }
            })
    }

    static findOne(req, res) {
        User
            .findOne({ _id: req.params.id })
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = UserController