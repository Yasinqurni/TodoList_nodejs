const bcrypt = require('bcrypt')

const isMatch = async (payload, isExistUser) => {
    return await bcrypt.compare(payload.code, isExistUser.code)
}
module.exports = {
    isMatch,
    bcrypt
}