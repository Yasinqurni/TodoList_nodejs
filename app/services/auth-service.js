
const {generateToken} = require('../../lib/jwt')
const isMatch = require('../../lib/bcrypt')

class AuthService{
    constructor(userRepository) {
        this.repository = userRepository
    }

    async register(payload){
        return this.repository.createUser(payload)
    }

    async login(payload, existingData){
            const match = await isMatch(payload, existingData)
            if(!match) {throw new Error('wrong code')}
            const token = await generateToken(existingData)
            return token
    }
}

module.exports = AuthService
