

class TitleRepository {

    constructor(Title, Activity) {
        this.title = Title
        this.activity = Activity

    }

    async findAll(auth) {
        return this.title.findAll({
            where: {user_id: auth},
            include:{model: this.activity}
        })
    }

    async findById(id, auth) {
        return this.title.findOne({
            where: {id: id, user_id: auth},
            include:{model: this.activity}
        })
    }

    async create(title, userId) {
        return this.title.create({
            title: title.title,
            user_id: userId
        })
    }

    async update(title, id) {
        return this.title.update(
            {title: title},
            {where: {id: id}}
        )
    }

    async delete(id) {
        return this.title.destroy({where:{id: id}})
    }
}


module.exports = TitleRepository