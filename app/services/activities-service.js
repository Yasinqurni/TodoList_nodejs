

class ActivityService {

    constructor(ActivityRepository) {
        this.activityRepository = ActivityRepository
    }

    async create(activity, userId, titleId, done) {
        return await this.activityRepository.create(activity, userId, titleId, done)
    }

    async bulkCreate(activity, userId, titleId, done) {
      
        const listArray = Object.keys(activity).map((key) => {
            const activities = {}
            activities.list = activity[key]
            activities.user_id = userId
            activities.title_id = titleId
            activities.done = done

            return activities
          })

        return await this.activityRepository.bulkCreate(listArray)
    }

    async update(activity, id) {
        return await this.activityRepository.update(activity, id)
    }

    async delete(id) {
        return await this.activityRepository.delete(id)
    }

    async updateStatus(id) {
        return await this.activityRepository.updateStatus(id)
    }

    async getById(id, auth) {
        return await this.activityRepository.getById(id, auth)
    }

    async getAll(userId, titleId) {
        return await this.activityRepository.getAll(userId, titleId)
    }
}

module.exports = ActivityService