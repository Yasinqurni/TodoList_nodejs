const jwt = require('../../lib/jwt')
const config = require('../../db/config/auth')
const ErrorResponse = require('../../response-helper/error-helper')

class tokenJwt {

    verifyToken (req, res, next) {

        try {
            const token = req.headers['authorization']
            if(!token) {throw new ErrorResponse(400, 'please login')}
    
            jwt.jwt.verify(token, config.secret, (err, decoded) =>{
                if(err) {
                    throw new ErrorResponse(400, 'cannot verify token')
                }
                req.userId = decoded.id
                req.userRole = decoded.role
                next()
            })
        } 
        
        catch (error) {
            next(error)
        }
    }
}

module.exports = {
    tokenJwt,
}