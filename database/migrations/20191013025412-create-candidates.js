module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Candidates', {
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
        unique: true,
        lowercase:true,
        type: DataTypes.STRING,
        //validate: {
        //  isEmail: true,
       // }
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
        //validate: {
        //  isNumeric: true,
        //  max: 11,
       // }
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
    return queryInterface.dropTable('Candidates');
  }
};