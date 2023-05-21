

class ActivityService {

    constructor(ActivityRepository) {
        this.activityRepository = ActivityRepository
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

    async update(title, id, userId) {
        return await this.activityRepository.update(title, id, userId)
    }

    async delete(id) {
        return await this.activityRepository.delete(id, userId)
    }

    async updateStatus(id) {
        return await this.activityRepository.updateStatus(id)
    }

    async getById(id, userId, titleId) {
        return await this.activityRepository.getById(id, userId, titleId)
    }

    async getAll(userId, titleId) {
        return await this.activityRepository.getAll(userId, titleId)
    }
}

module.exports = ActivityService