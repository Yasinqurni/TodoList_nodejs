const router = require('express').Router()
const {Title, Activity} = require('../../db/models')
const {TitleRepository, ActivityRepository} = require('../repositories')
const {TitleService, ActivityService} = require('../services')
const {TitleController} = require('../controllers')
const {tokenJwt} = require('../middlewares/auth-middleware')

const titleRepository = new TitleRepository(Title, Activity)
const activityRepository = new ActivityRepository(Activity)
const titleService = new TitleService(titleRepository)
const activityService = new ActivityService(activityRepository)
const titleController = new TitleController(titleService, activityService)

const tokenjwt = new tokenJwt()

//get all todolist
router.get('/api/todolist', tokenjwt.verifyToken, titleController.getAllTodolist.bind(titleController))
//get By Id Todolist
router.get('/api/todolist/:id', tokenjwt.verifyToken, titleController.getByIdTodolist.bind(titleController))
//delete todolist
router.delete('/api/todolist/:id', tokenjwt.verifyToken, titleController.deleteTodolist.bind(titleController))
//create title
router.post('/api/title', tokenjwt.verifyToken, titleController.createTitle.bind(titleController))
//update title
router.patch('/api/title/:id', tokenjwt.verifyToken, titleController.updateTitle.bind(titleController))
//add activity
router.post('/api/activity/:id', tokenjwt.verifyToken, titleController.addActivity.bind(titleController))

module.exports = router