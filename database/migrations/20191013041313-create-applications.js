module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      candidate_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {model: 'Candidates', key: 'id'},
        onDelete: 'CASCADE',
      },
      opportunity_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {model: 'Opportunities', key: 'id'},
        onDelete: 'CASCADE',
      },
      comments: {
        allowNull: true,
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
    return queryInterface.dropTable('Applications');
  }
};
