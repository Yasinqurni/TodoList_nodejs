

class TitleService {

    constructor(TitleRepository) {
        this.titleRepository = TitleRepository
    }

    async findAll(auth) {
        return await this.titleRepository.findAll(auth)
    }

    async findById(id, auth) {
        return await this.titleRepository.findById(id, auth)
    }

    async create(title, userId) {
        return await this.titleRepository.create(title, userId)
    }

    async update(title, id) {
        return await this.titleRepository.update(title, id)
    }

    async delete(id) {
        return await this.titleRepository.delete(id)
    }

}

module.exports = TitleService