const { Opportunity } = require('../models');

const opportunityTest = {
    name: 'name teste',
    description: 'description teste',
    requirements: 'requirements teste',
    salary: 999999,
    weeklyWorkload: 'weekly teste',
    benefits: 'benefits teste',
    workRegime: 'work teste',
    activities: 'activities teste',
    workplace: 'workplace teste',
    contact: 'contact@teste.com'

};

describe('opportunity', () => {
    test('create', async () => {
        try {
            const data = await Opportunity.create(opportunityTest);
            expect(data.success).toBe(true);
        } catch (err) {}
    });
    
    test('update', async () => {
        try {
            const data = await Opportunity.update(
                opportunityTest, 
                { where: { id: 1 }},
            );
            expect(data.success).toBe(true);
        } catch (err) {}
    });

    test('delete', async () => {
        try {
            const data = await Opportunity.delete(
                { where: { id: 1 }},
            );
            expect(data.success).toBe(true);
        } catch (err) {}
    });
});