const mongoose = require('mongoose')

let passwordSchema = new mongoose.Schema({
    account: {
        type: String,
        required: [true, `Please fill in account name`]
    },
    email: {
        type: String,
        required: [true, `Please fill in email / username`]
    },
    password: {
        type: String,
        required: [true, `Please fill in password`]
    },
    icon: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
})

let Password = mongoose.model('Password', passwordSchema)

module.exports = Password