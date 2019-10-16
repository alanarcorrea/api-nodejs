const messages = require('../../config/messages');

module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define('Application', {
      candidate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          },
          isNumeric: {
            msg: messages.INVALID_FIELD_NUMERIC
          }
        }
      },
      opportunity_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          },
          isNumeric: {
            msg: messages.INVALID_FIELD_NUMERIC
          }
        }
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: messages.INVALID_FIELD_NOT_EMPTY
          }
        }
      }   
    });
  
    Application.associate = function(models){
        Application.belongsTo(models.Candidate, {foreignKey: 'candidate_id'})
        Application.belongsTo(models.Opportunity, {foreignKey: 'opportunity_id'})
    };
    
    return Application;
}
  