const router = require('express').Router()
const {Activity} = require('../../db/models')
const {ActivityRepository} = require('../repositories')
const {ActivityService} = require('../services')
const {ActivityController} = require('../controllers')
const {tokenJwt} = require('../middlewares/auth-middleware')

const activityRepository = new ActivityRepository(Activity)
const activityService = new ActivityService(activityRepository)
const activityController = new ActivityController(activityService)

const tokenjwt = new tokenJwt()

//update activity
router.patch('/api/activity/:id', tokenjwt.verifyToken, activityController.updateActivity.bind(activityController))
//delete activity
router.delete('/api/activity/:id', tokenjwt.verifyToken, activityController.updateActivity.bind(activityController))
//update done
router.post('/api/activity/:id', tokenjwt.verifyToken, activityController.updateActivity.bind(activityController))

module.exports = router