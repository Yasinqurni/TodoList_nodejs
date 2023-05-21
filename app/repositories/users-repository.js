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
            code: bcrypt.bcrypt.hashSync(payload.code.toString(), 8, (err, hash) => {
                if (err) {
                  console.error(err);
                  return
                }
            })
            
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

    findAllUsers(){
        return this.model.findAll()
    }

}

module.exports = UserRepository