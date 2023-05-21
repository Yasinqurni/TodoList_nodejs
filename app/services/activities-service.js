

class ActivityService {

    constructor(ActivityRepository) {
        this.activityRepository = ActivityRepository
    }

    async create(activity, userId, done) {
        return await this.activityRepository.create(activity, userId, done)
    }

    async bulkCreate(activity, userId, titleId) {
        const activities = []
        const keys = Object.keys(activity)

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            const value = activity[key]
            const titleObj = {}
            titleObj.user_id = userId
            titleObj.title_id = titleId
            titleObj.list = value
            titleObj.done = false
           
            activities.push(titleObj)
            
          }

        return await this.activityRepository.bulkCreate(activities)
    }

    async update(activity, id) {
        return await this.activityRepository.update(activity, id)
    }

    async delete(id) {
        return await this.activityRepository.delete(id, userId)
    }

    async updateStatus(id) {
        return await this.activityRepository.updateStatus(id)
    }

    async getById(id) {
        return await this.activityRepository.getById(id)
    }

    async getAll(userId, titleId) {
        return await this.activityRepository.getAll(userId, titleId)
    }
}

module.exports = ActivityService