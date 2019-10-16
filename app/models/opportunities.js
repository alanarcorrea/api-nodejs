const messages = require('../../config/messages');

module.exports = (sequelize, DataTypes) => {
    const Opportunity = sequelize.define('Opportunity', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          }
        }
      },
      requirements: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          }
        } 
      },
      salary: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validade: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          }
        } 
      },
      weeklyWorkload: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          }
        } 
      },
      benefits: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          }
        } 
      },
      workRegime: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          }
        } 
      },
      activities: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          }
        } 
      },
      workplace: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          }
        } 
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          },
          isEmail: {
            msg: messages.INVALID_FIELD_EMAIL
          }
        }
      }
    });

    Opportunity.associate = function(models){
      Opportunity.belongsToMany(models.Candidate, {through: 'Applications', foreignKey: 'opportunity_id'})
    };
  
    return Opportunity;
}