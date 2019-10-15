module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    cpf: DataTypes.STRING,
  });

  Candidate.associate = function(models){
    Candidate.belongsToMany(models.Opportunity, {through: 'Applications', foreignKey: 'candidate_id'})
  };

  return Candidate;
}

