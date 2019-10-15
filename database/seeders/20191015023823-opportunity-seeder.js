'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Opportunities', [
      {
        name: 'Desenvolvedor Front End Junior', 
        description: 'front-end',
        requirements: 'Conhecimentos em HTML, CSS e JS', 
        salary: 3500.00,
        weeklyWorkload: '40 horas',
        benefits: 'VT / VR',
        workRegime: 'CLT',
        activities: 'Desenvolver aplicações web',
        workplace: 'Pelotas/RS',
        contact: 'joao@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Estágio Desenvolvedor Back End', 
        description: 'back-end',
        requirements: 'Conhecimentos PHP, Laravel e Mysql', 
        salary: 1500.00,
        weeklyWorkload: '20 horas',
        benefits: 'VT / VR',
        workRegime: 'Estágio',
        activities: 'Desenvolver aplicações web',
        workplace: 'Pelotas/RS',
        contact: 'maria@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desenvolvedor Full Stack', 
        description: 'back-end, front-end e mobile',
        requirements: 'Conhecimentos PHP, Laravel, Mysql, ReactNative, JS, HTML e CSS', 
        salary: 5500.00,
        weeklyWorkload: '50 horas',
        benefits: 'VT / VR',
        workRegime: 'MEI',
        activities: 'Desenvolver aplicações web',
        workplace: 'Home Office',
        contact: 'paulo@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Opportunities', [
      {
        name: 'Desenvolvedor Front End Junior', 
        description: 'front-end',
        requirements: 'Conhecimentos em HTML, CSS e JS', 
        salary: 3500.00,
        weeklyWorkload: '40 horas',
        benefits: 'VT / VR',
        workRegime: 'CLT',
        activities: 'Desenvolver aplicações web',
        workplace: 'Pelotas/RS',
        contact: 'joao@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Estágio Desenvolvedor Back End', 
        description: 'back-end',
        requirements: 'Conhecimentos PHP, Laravel e Mysql', 
        salary: 1500.00,
        weeklyWorkload: '20 horas',
        benefits: 'VT / VR',
        workRegime: 'Estágio',
        activities: 'Desenvolver aplicações web',
        workplace: 'Pelotas/RS',
        contact: 'maria@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desenvolvedor Full Stack', 
        description: 'back-end, front-end e mobile',
        requirements: 'Conhecimentos PHP, Laravel, Mysql, ReactNative, JS, HTML e CSS', 
        salary: 5500.00,
        weeklyWorkload: '50 horas',
        benefits: 'VT / VR',
        workRegime: 'MEI',
        activities: 'Desenvolver aplicações web',
        workplace: 'Home Office',
        contact: 'paulo@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  }
};
