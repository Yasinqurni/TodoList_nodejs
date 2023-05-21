const bcrypt = require('../../lib/bcrypt')

class UserService{
    
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async findById(id){
        const user = await this.userRepository.findById(id);
        if(!user){throw new Error('user not found')}

        return user
    }

    async findByCode(code){

        const findAllUsers = await this.userRepository.findAll()
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