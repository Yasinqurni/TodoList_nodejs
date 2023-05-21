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

        const findAllUsers = await this.userRepository.findAllUsers()
        if(findAllUsers.length === 0) {
            return {
                data: null,
                status: false
            }
        }

        for(let i = 0; i < findAllUsers.length; i++) {
            const match = await bcrypt.isMatch(code, findAllUsers[i].code)
            if(match === true) {
                return {
                    data: findAllUsers[i],
                    status: true
                }
            }
        }

        return {
            data: null,
            status: false
        }
    }
}   

module.exports = UserService