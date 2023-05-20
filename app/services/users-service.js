const bcrypt = require('../../lib/bcrypt')

class UserService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async findUserByEmail(email){
        const user = await this.userRepository.findUserByEmail(email);
        if(!user){throw new Error('user not found')}
        return user
    }
    async findUserById(id){
        const user = await this.userRepository.findUserByEmail(id);
        if(!user){throw new Error('user not found')}
        return user
    }
    async findUserByCode(code){
        hashCode = bcrypt.bcrypt.hashSync(code, 8)
        const user = this.userRepository.findUserByCode(hashCode)
        if(!user) {throw new Error("user not found")}
        return user
    }
}   

module.exports = UserService