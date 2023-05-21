
const {generateToken} = require('../../lib/jwt')
const isMatch = require('../../lib/bcrypt')

class AuthService{
    constructor(userRepository) {
        this.repository = userRepository
    }

    async register(payload){
        return this.repository.createUser(payload)
    }

    async login(payload){
            const token = await generateToken(payload)
            return token
    }
}

module.exports = AuthService
