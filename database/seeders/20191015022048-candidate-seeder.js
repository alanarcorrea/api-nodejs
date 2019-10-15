'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Candidates', [
      {
        name: 'Davi Luiz', 
        email: 'davi@gmail.com',
        phone: '53999881234', 
        cpf: '09836598709',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paula Silveira', 
        email: 'paula@gmail.com',
        phone: '53981781431', 
        cpf: '64528714367',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jaqueline Simões', 
        email: 'jaqueline@gmail.com',
        phone: '51984546754', 
        cpf: '89065674432',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bruno Carlos', 
        email: 'bruno@gmail.com',
        phone: '53991662136', 
        cpf: '23578765449',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Candidates', [
      {
        name: 'Davi Luiz', 
        email: 'davi@gmail.com',
        phone: '53999881234', 
        cpf: '09836598709',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paula Silveira', 
        email: 'paula@gmail.com',
        phone: '53981781431', 
        cpf: '64528714367',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jaqueline Simões', 
        email: 'jaqueline@gmail.com',
        phone: '51984546754', 
        cpf: '89065674432',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bruno Carlos', 
        email: 'bruno@gmail.com',
        phone: '53991662136', 
        cpf: '23578765449',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  }
};
