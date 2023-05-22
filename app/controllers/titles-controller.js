const ErrorResponse = require('../../response-helper/error-helper')
const Response = require('../../response-helper/response-helper')


class TitleController {

    constructor(TitleService, ActivityService) {
        this.titleService = TitleService
        this.activityService = ActivityService
    }

    async createTitle(req, res, next) {

        try {
            const payload = req.body
            if(Object.keys(payload).length === 0) {throw new ErrorResponse(400, 'please insert the data')}

            const auth = req.userId

            const create = await this.titleService.create(payload, auth)
            if(!create) {throw new ErrorResponse(400, 'cannot create title')}

            return new Response().response(res, 200, 'create title successfully')
        } 

        catch (error) {
            next(error)
        }
    }

    async updateTitle(req, res, next) {

        try {
            const params = req.params.id
            const payload = req.body
            const auth = req.userId

            if(Object.keys(payload).length === 0 || Object.keys(params).length === 0) {
                throw new ErrorResponse(400, 'please insert the data')
            }
            const findOne = await this.titleService.findById(params, auth)
            if(!findOne) { throw new ErrorResponse(400, 'title not found')}

            const update = await this.titleService.update(payload.title, findOne.id)
            if(!update) { throw new ErrorResponse(400, 'cannot update title')}

            return new Response().response(res, 200, 'update title successfully')
        } 
        
        catch (error) {
            next(error)
        }
    }
    
    async deleteTodolist(req, res, next) {

        try {
            const params = req.params.id
            const auth = req.userId

            if(Object.keys(params).length === 0) {
                throw new ErrorResponse(400, 'please insert the data')
            }
            const findOne = await this.titleService.findById(params, auth)
            if(!findOne) { throw new ErrorResponse(400, 'title not found')}

            const findActivity = await this.activityService.getAll(auth, findOne.id)
            if(findActivity) {
                for(const activity of findActivity) {
                    await this.activityService.delete(activity.id)
                }
            }

            const update = await this.titleService.delete(findOne.id)
            if(!update) { throw new ErrorResponse(400, 'cannot update title')}

            return new Response().response(res, 200, 'delete title successfully')
        } 

        catch (error) {
            next(error)
        }
        
    }

    async getAllTodolist(req, res, next) {

        try {
            const auth = req.userId

            const getAll = await this.titleService.findAll(auth)
            if(getAll.length === 0) { 
                throw new ErrorResponse(400, 'todolist not found') 
            }

            return new Response().response(res, 200, getAll)
        } 
        catch (error) {
            next(error)
        }
    }

    async getByIdTodolist(req, res, next) {

        try {
            const id = req.params.id
            const auth = req.userId

            if(Object.keys(id).length === 0) {
                throw new ErrorResponse(400, 'please insert the parameter')
            }

            const getAll = await this.titleService.findById(id, auth)
            if(!getAll) { 
                throw new ErrorResponse(400, 'todolist not found') 
            }

            return new Response().response(res, 200, getAll)
        } 
        catch (error) {
            next(error)
        }
    }

        
    async addActivity(req, res, next) {
        
        try {
            const params = req.params.id
            const activity = req.body
            const auth = req.userId

            if(Object.keys(activity).length === 0 || Object.keys(params).length === 0) {
                throw new ErrorResponse(400, 'please insert the parameter')
            }
            const getAll = await this.titleService.findById(params, auth)
            if(!getAll) { 
                throw new ErrorResponse(400, 'todolist not found') 
            }
            const update = await this.activityService.create(activity.list, auth, getAll.id, false)
            if(!update) { throw new ErrorResponse(400, 'cannot update status activity')}

            return new Response().response(res, 200, 'add activity successfull')
        } 
        
        catch (error) {
            next(error)
        }
    }

}

module.exports = TitleController
