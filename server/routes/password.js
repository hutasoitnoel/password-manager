const route = require("express").Router()
const PasswordController = require('../controllers/password')
const Authentication = require('../middlewares/Authentication')
const Authorization = require('../middlewares/Authorization')

route.use(Authentication)
route.post('/', PasswordController.create)

route.get('/:id', Authorization, PasswordController.findOne)
route.get('/', PasswordController.findAll)

route.patch('/:id', Authorization, PasswordController.update)

route.delete('/:id', Authorization, PasswordController.delete)

module.exports = route