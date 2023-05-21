const bcrypt = require('../../lib/bcrypt')

class UserRepository{

    constructor(User){
        this.model = User
    }
    
    create(payload){
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
    
    async findById(id){
        return this.model.findOne({
            where: { id: id }
        })
    }

    findAll(){
        return this.model.findAll()
    }

}

module.exports = UserRepository