const router = require('express').Router()
const {User} = require('../../db/models')
const {UserRepository} = require('../repositories')
const {UserService, AuthService} = require('../services')
const {AuthController} = require('../controllers')

const userRepository = new UserRepository(User)
const userService = new UserService(userRepository)
const authService = new AuthService(userRepository)
const authController = new AuthController(authService, userService)

router.post('/api/register', authController.register)
router.post('/api/login', authController.login)

module.exports = router