const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: Datatypes.STRING,
        validate: {
            len: [4]
        }
    },
    user_id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;