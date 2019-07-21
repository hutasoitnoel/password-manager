const Password = require('../models/password')

class PasswordController {
    static create(req, res) {
        const { account, email, password } = req.body
        Password
            .create({ account, email, password, userId: req.decoded._id, icon: `https://logo.clearbit.com/${account}.com` })
            .then(password => {
                res.status(201).json(password)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        const { account, email, password } = req.body
        Password
            .findOneAndUpdate(
                { _id: req.params.id },
                { account, email, password, icon: `https://logo.clearbit.com/${account}.com`, userId: req.decoded._id },
                { new: true })
            .then(updated => {
                res.status(200).json(updated)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        Password
            .findOneAndDelete({ _id: req.params.id })
            .then(deleted => {
                res.status(202).json(deleted)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static findAll(req, res) {
        Password
            .find({ userId: req.decoded._id })
            .then(passwords => {
                res.status(200).json(passwords)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static findOne(req, res) {
        Password
            .findOne({ _id: req.params.id })
            .then(password => {
                res.status(200).json(password)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = PasswordController