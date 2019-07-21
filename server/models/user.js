const mongoose = require('mongoose')
const { hash } = require('../helpers/bcrypt')

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please fill in the username"]
    },
    password: {
        type: String,
        required: [true, `Please fill in the password`]
    }
})

userSchema.pre('save', function (next) {
    this.password = hash(this.password)
    next()
})

let User = mongoose.model('User', userSchema)

module.exports = User