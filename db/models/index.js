const User = require('./users-model')
const Title = require('./titles-model')
const Activity = require('./activities-model')

Title.belongsTo(User, {
    foreignKey: 'user_id',
})

Activity.belongsTo(User, {
    foreignKey: 'user_id',
})

Activity.belongsTo(Title, {
    foreignKey: 'title_id',
})

module.exports = {
    User,
    Title,
    Activity
}