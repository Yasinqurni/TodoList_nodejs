const User = require('./users-model')
const Title = require('./title-model')
const Todo = require('./todo-model')

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