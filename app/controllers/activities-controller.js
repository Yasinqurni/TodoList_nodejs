const ErrorResponse = require('../../response-helper/error-helper')
const Response = require('../../response-helper/response-helper')

class ActivityController {

    constructor(ActivityService) {
        this.activityService = ActivityService
    }

    async updateActivity(req, res, next) {

        try {
            const params = req.params.id
            const payload = req.body
            const auth = req.userId

            if(Object.keys(payload).length === 0 || Object.keys(params).length === 0) {
                throw new ErrorResponse(400, 'please insert the data')
            }
            const findOne = await this.activityService.getById(params, auth)
            if(!findOne) { throw new ErrorResponse(400, 'activity not found')}

            const update = await this.activityService.update(payload.list, findOne.id)
            if(!update) { throw new ErrorResponse(400, 'cannot update activity')}

            return new Response().response(res, 200, 'update activity successfull')
        } 
        
        catch (error) {
            next(error)
        }
    }
    
    async deleteActivity(req, res, next) {
            
        try {
            const params = req.params.id
            const auth = req.userId

            if(Object.keys(params).length === 0) {
                throw new ErrorResponse(400, 'please insert the parameter')
            }
            const findOne = await this.activityService.getById(params, auth)
            if(!findOne) { throw new ErrorResponse(400, 'activity not found')}

            const update = await this.activityService.delete(findOne.id)
            if(!update) { throw new ErrorResponse(400, 'cannot delete activity')}

            return new Response().response(res, 200, 'delete activity successfull')
        } 
        
        catch (error) {
            next(error)
        }

    }
    
    async done(req, res, next) {
        
        try {
            const params = req.params.id
            const auth = req.userId

            if(Object.keys(params).length === 0) {
                throw new ErrorResponse(400, 'please insert the parameter')
            }
            const findOne = await this.activityService.getById(params, auth)
            if(!findOne) { throw new ErrorResponse(400, 'activity not found')}

            const update = await this.activityService.updateStatus(findOne.id)
            if(!update) { throw new ErrorResponse(400, 'cannot update status activity')}

            return new Response().response(res, 200, 'activity done!')
        } 
        
        catch (error) {
            next(error)
        }
    }
}

module.exports = ActivityController