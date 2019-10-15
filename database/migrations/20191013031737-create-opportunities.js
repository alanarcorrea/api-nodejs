module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Opportunities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      requirements: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      salary: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      weeklyWorkload: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      benefits: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      workRegime: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      activities: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      workplace: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      contact: {
        allowNull: false,
        lowercase:true,
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        default: Date.now,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        default: Date.now,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Opportunities');
  }
};