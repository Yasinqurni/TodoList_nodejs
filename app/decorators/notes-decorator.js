
class NoteResponse {

    async responseArray(payload) {
        const mapping = payload.map((note) => {
            return {
                title: note.title,
                activities: note.activities.map((activity) => {
                    return {
                        list: activity.list
                    }
                })
            }
        })
        return await Promise.all(mapping)
    }

    async responseobj(payload) {

        return {
            title: payload.title,
            activities: payload.activities.map((activity) => {
                return {
                    list: activity.list
                }
            })
        }
    }
}

module.exports = NoteResponse