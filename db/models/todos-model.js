
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class todo extends Model {
}

todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    list: {
      type: DataTypes.STRING,
      allowNull: true
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  }
  
)
module.exports = todo