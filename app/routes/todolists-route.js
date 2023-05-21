const router = require('express').Router()
const {Activity, Title} = require('../../db/models')
const {TitleRepository, ActivityRepository} = require('../repositories')
const {TitleService, ActivityService} = require('../services')
const {TodolistController} = require('../controllers')
const {tokenJwt} = require('../middlewares/auth-middleware')

const titleRepository = new TitleRepository(Title)
const activityRepository = new ActivityRepository(Activity)
const titleService = new TitleService(titleRepository)
const activityService = new ActivityService(activityRepository)
const todolistController = new TodolistController(titleService, activityService)

const tokenjwt = new tokenJwt()

router.get('/api/todolist', tokenjwt.verifyToken, todolistController.getAllTodolist.bind(todolistController))

module.exports = router