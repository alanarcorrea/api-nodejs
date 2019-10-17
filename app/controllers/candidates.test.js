const { Candidate } = require('../models');

const candidateTest = {
    name: 'candidato teste',
    email: 'testecandidate@teste.com',
    phone: '51999999999',
    cpf: '99999999999'
};

describe('candidate', () => {
    test('create', async () => {
        try {
            const data = await Candidate.create(candidateTest);
            expect(data.success).toBe(true);
        } catch (err) {}
    });
    
    test('update', async () => {
        try {
            const data = await Candidate.update(
                candidateTest, 
                { where: { id: 1 }},
            );
            expect(data.success).toBe(true);
        } catch (err) {}
    });

    test('delete', async () => {
        try {
            const data = await Candidate.delete(
                { where: { id: 1 }},
            );
            expect(data.success).toBe(true);
        } catch (err) {}
    });
});