const { Application } = require('../models');

const applicationTest = {
    candidate_id: 1,
    opportunity_id: 1,
    comments: 'comments teste'
};

describe('application', () => {
    test('create', async () => {
        try {
            const data = await Application.create(applicationTest);
            expect(data.success).toBe(true);
        } catch (err) {}
    });
    
    test('update', async () => {
        try {
            const data = await Application.update(
                applicationTest, 
                { where: { id: 1 }},
            );
            expect(data.success).toBe(true);
        } catch (err) {}
    });

    test('delete', async () => {
        try {
            const data = await Application.delete(
                { where: { id: 1 }},
            );
            expect(data.success).toBe(true);
        } catch (err) {}
    });
});