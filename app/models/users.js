const messages = require('../../config/messages');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: messages.INVALID_FIELD_NOT_EMPTY
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: messages.INVALID_FIELD_NOT_EMPTY
            },
            isEmail: {
                msg: messages.INVALID_FIELD_EMAIL
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: messages.INVALID_FIELD_NOT_EMPTY
            },
            len: {
                args: [8,20],
                msg: messages.INVALID_FIELD_LENGTH_PASSWORD
            }
        }
    }
  });
  
  return User;
}