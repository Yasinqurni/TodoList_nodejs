const bcrypt = require('bcrypt')

const isMatch = async(payload, isExistUser) => {
    return bcrypt.compare(payload, isExistUser)
}
module.exports = {
    isMatch,
    bcrypt
}