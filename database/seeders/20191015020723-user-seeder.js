'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Users', [
    {
      name: 'Maria da Silva', 
      email: 'maria@gmail.com',
      password: '123456', 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'João Lopes', 
      email: 'joao@gmail.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Isabel Oliveira', 
      email: 'isabel@gmail.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Laura Lima', 
      email: 'laura@gmail.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [
      {
        name: 'Maria da Silva', 
        email: 'maria@gmail.com',
        password: '123456', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'João Lopes', 
        email: 'joao@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Isabel Oliveira', 
        email: 'isabel@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Laura Lima', 
        email: 'laura@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    },
};
