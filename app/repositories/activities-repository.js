

class ActivityRepository {

    constructor(activity) {
        this.model = activity
    }

    async findAll() {
        return this.model.findAll()
    }

    async findById(id) {
        return this.model.findOne({
            where: {id: id}
        })
    }

    async create(activity, userId, done) {
        return this.model.create({
            activity: activity,
            user_id: userId,
            done: done
        })
    }

    async bulkCreate(payload) {
        return this.model.bulkCreate(payload)
    }

    async update(activity, userId, id) {
        return this.model.update(
            {activity: activity},
            {where: {user_id: userId, id: id}}
        )
    }

    async delete(id) {
        return this.model.destroy({where: {id: id}})
    }
}


module.exports = ActivityRepository