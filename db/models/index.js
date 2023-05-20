const User = require('./users-model')
const Title = require('./titles-model')
const Todo = require('./todos-model')

Title.belongsTo(User, {
    foreignKey: 'user_id',
})

Todo.belongsTo(User, {
    foreignKey: 'user_id',
})

Todo.belongsTo(Title, {
    foreignKey: 'title_id',
})

module.exports = {
    User,
    Title,
    Todo
}