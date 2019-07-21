const route = require("express").Router()
const User = require("./user")
const Password = require("./password")

route.use('/user', User)
route.use('/password', Password)

module.exports = route