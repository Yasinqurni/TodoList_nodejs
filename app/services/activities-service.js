

class ActivityService {

    constructor(ActivityRepository) {
        this.activityRepository = ActivityRepository
    }


    async bulkCreate(payload, auth) {

        const keys = Object.keys(payload)

        for (let i = 0; i < keys.length; i++) {

            const key = keys[i]
            const value = payload[key]

            if (key.startsWith('list')) {
                await this.activityRepository.create(value, auth, false)
            }
        }
    }
}

module.exports = ActivityService