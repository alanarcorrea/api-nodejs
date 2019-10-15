module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
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
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        lowercase:true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
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
    return queryInterface.dropTable('Users');
  }
};