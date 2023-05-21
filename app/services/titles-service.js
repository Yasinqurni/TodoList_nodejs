

class TitleService {

    constructor(TitleRepository) {
        this.titleRepository = TitleRepository
    }

    async create(payload, auth) {
       return await this.titleRepository.create(payload, auth)
    }

}

module.exports = TitleService