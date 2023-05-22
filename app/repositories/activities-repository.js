

class ActivityRepository {

    constructor(activity) {
        this.model = activity
    }

    async create(activity, userId,titleId, done) {
        return this.model.create({
            list: activity,
            user_id: userId,
            title_id: titleId,
            done: done
        })
    }

    async bulkCreate(payload) {
        return this.model.bulkCreate(payload)
    }

    async update(activity, id) {
        return this.model.update(
            {list: activity},
            {where: {id: id}}
        )
    }

    async getById(id, userId) {
        return this.model.findOne({
            where: {
                user_id: userId, 
                id: id
            }
        })
    }

    async getAll(userId, titleId) {
        return this.model.findAll({
            where: {user_id: userId, title_id: titleId}
        })
    }

    async updateStatus(id) {
        return this.model.update(
            {done: true},
            {where: {id: id}}
        )
    }

    async delete(id) {
        return this.model.destroy({where: {id: id}})
    }
}


module.exports = ActivityRepository