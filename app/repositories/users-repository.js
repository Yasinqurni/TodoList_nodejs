const bcrypt = require('../../lib/bcrypt')

class UserRepository{
    constructor(User){
        this.model = User
    }
    createUser(payload){
        return this.model.create({
            fullname: payload.fullname,
            address: payload.address,
            phone: payload.phone,
            email: payload.email,
            code: bcrypt.bcrypt.hashSync(toString(payload.code), 8),
        })
    }
    
    async findUserByEmail(payload){
        return this.model.findOne({
            where: { email: payload.email }
        })
    }
    
    async findUserById(email){
        return this.model.findOne({
            where: { id: email }
        })
    }
    
    findUserByCode(payload){
        return this.model.findOne({
            where: { code: payload }
        })
    }

}

module.exports = UserRepository