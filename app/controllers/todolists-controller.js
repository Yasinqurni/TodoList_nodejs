const ErrorResponse = require('../../response-helper/error-helper')
const Response = require('../../response-helper/response-helper')

class TodolistController {

    constructor(TitleService, ActivityService) {
        this.titleService = TitleService
        this.activityService = ActivityService
    }

    async getAllTodolist(req, res, next) {
        
    }

    async getByIdTodolist(req, res, next) {

    }


}

module.exports = TodolistController