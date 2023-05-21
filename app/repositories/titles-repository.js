

class TitleRepository {

    constructor(Title) {
        this.model = Title
    }

    async findAll() {
        return this.model.findAll()
    }

    async findById(id) {
        return this.model.findOne({
            where: {id: id}
        })
    }

    async create(title, userId) {
        return this.model.create({
            title: title.title,
            user_id: userId
        })
    }

    async update(title, userId, id) {
        return this.model.update(
            {title: title},
            {where: {user_id: userId, id: id}}
        )
    }

    async delete(id) {
        return this.model.destroy({where: {id: id}})
    }
}


module.exports = TitleRepository