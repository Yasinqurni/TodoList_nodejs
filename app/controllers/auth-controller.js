const ErrorResponse = require('../../response-helper/error-helper')
const Response = require('../../response-helper/response-helper')

class AuthController{

    constructor(authService, userService) {
        this.authService = authService
        this.userService = userService
    }

    async register(req, res, next){

        try {
            const payload = req.body

            if(Object.keys(payload).length === 0) {throw new ErrorResponse(400, 'please insert the data')}
            if(typeof payload.code !== 'number') {throw new ErrorResponse(400, 'please insert the code as an number')}
            
            const code = payload.code.toString()
            if(code.length !== 4) {throw new ErrorResponse(400, 'please insert the code with exactly 4 numbers')}

            const findUser = await this.userService.findByCode(code)
            if(findUser.status == true) { throw new ErrorResponse(400, 'code has been used')}

            const register = await this.authService.register(payload)
            if(!register) { throw new ErrorResponse(400, 'cannot register user')}

            return new Response().response(res, 200, 'user registered successfully')

        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next){

        try {
            const payload = req.body

            if(Object.keys(payload).length === 0) {throw new ErrorResponse(400, 'please insert the data')}
            if(typeof payload.code !== 'number') {throw new ErrorResponse(400, 'please insert the code as an number')}
            
            const code = payload.code.toString()
            if(code.length !== 4) {throw new ErrorResponse(400, 'please insert the code with exactly 4 numbers')}


            const findUser = await this.userService.findByCode(code)
            if(findUser.status == false) { throw new ErrorResponse(400, 'user not registered')}
            
            const token = await this.authService.login(findUser.data)
            
            return new Response().responseLogin(res, 200, token)

        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthController