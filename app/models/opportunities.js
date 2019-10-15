module.exports = (sequelize, DataTypes) => {
    const Opportunity = sequelize.define('Opportunity', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      requirements: DataTypes.STRING,
      salary: DataTypes.FLOAT,
      weeklyWorkload: DataTypes.STRING,
      benefits: DataTypes.STRING,
      workRegime: DataTypes.STRING,
      activities: DataTypes.STRING,
      workplace: DataTypes.STRING,
      contact: DataTypes.STRING,
    });

    Opportunity.associate = function(models){
      Opportunity.belongsToMany(models.Candidate, {through: 'Applications', foreignKey: 'opportunity_id'})
    };
  
    return Opportunity;
  }