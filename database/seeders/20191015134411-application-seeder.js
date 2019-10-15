'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Applications', [
      {
        candidate_id: 1, 
        opportunity_id: 1,
        comments: 'Entrevista muito boa, mostrou conhecimento avançado no teste', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id: 2, 
        opportunity_id: 1,
        comments: 'Análise de currículo concluída e ok', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id: 3, 
        opportunity_id: 2,
        comments: 'Entrevista agendada para o dia 17/10 ás 14hs', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id: 4, 
        opportunity_id: 3,
        comments: 'Teste em andamento', 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Applications', [
      {
        candidate_id: 1, 
        opportunity_id: 1,
        comments: 'Entrevista muito boa, mostrou conhecimento avançado no teste', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id: 2, 
        opportunity_id: 1,
        comments: 'Análise de currículo concluída e ok', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id: 3, 
        opportunity_id: 2,
        comments: 'Entrevista agendada para o dia 17/10 ás 14hs', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id: 4, 
        opportunity_id: 3,
        comments: 'Teste em andamento', 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  }
};
