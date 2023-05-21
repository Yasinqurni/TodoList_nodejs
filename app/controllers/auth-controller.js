const ErrorResponse = require('../../response-helper/error-helper')
const Response = require('../../response-helper/response-helper')

class AuthController{
    constructor(authService, userService) {
        this.authService = authService;
        console.log(this.authService)
        this.userService = userService;
        console.log(this.userService)
    }

    async register(req, res, next){
        try {
            const payload = req.body
            console.log(payload)
            if(!payload.code) {throw new ErrorResponse(400, 'please insert the code')}
            
            const code = payload.code.toString()
            const findUser = await this.userService.findUserByCode(code)
            
            if(findUser) { throw new ErrorResponse(400, 'code has been used')}

            const register = await this.authService.register(payload)
            if(!register) { throw new ErrorResponse(400, 'cannot register user')}

            return new Response(res, 200, 'user registered successfully')

        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next){
        try {
            const payload = req.body

            const findUser = await this.userService.findUserByCode(payload.code)
            if(findUser) { throw new ErrorResponse(400, 'code has been used')}

            const token = await this.authService.login(payload, findUser)
            
            return new Response(res, 200, token)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthController