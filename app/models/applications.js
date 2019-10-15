module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define('Application', {
      candidate_id: DataTypes.INTEGER,
      opportunity_id: DataTypes.INTEGER,
      comments: DataTypes.STRING,
    });
  
    Application.associate = function(models){
        Application.belongsTo(models.Candidate, {foreignKey: 'candidate_id'})
        Application.belongsTo(models.Opportunity, {foreignKey: 'opportunity_id'})
    };
    
    return Application;
  }
  