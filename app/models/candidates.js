const messages = require('../../config/messages');

module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: messages.INVALID_FIELD_NOT_EMPTY
        },
        isNumeric: {
          msg: messages.INVALID_FIELD_NUMERIC
        },
        max: {
          args: [11],
          msg: messages.INVALID_FIELD_MAX  
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: messages.INVALID_FIELD_NOT_EMPTY
        },
        isNumeric: {
          msg: messages.INVALID_FIELD_NUMERIC
        },
        max: {
          args: [11],
          msg: messages.INVALID_FIELD_MAX  
        }
      }
    }
  });

  Candidate.associate = function(models){
    Candidate.belongsToMany(models.Opportunity, {through: 'Applications', foreignKey: 'candidate_id'})
  };

  return Candidate;
}

