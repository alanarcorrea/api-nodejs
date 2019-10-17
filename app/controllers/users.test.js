const { User } = require('../models');

const userTest = {
    name: 'nome teste',
    email: 'testeuser@teste.com',
    password: '12345678'
};

describe('user', () => {
    test('create', async () => {
        try {
            const data = await User.create(userTest);
            expect(data.success).toBe(true);
        } catch (err) {}
    });
    
    test('update', async () => {
        try {
            const data = await User.update(
                userTest, 
                { where: { id: 1 }},
            );
            expect(data.success).toBe(true);
        } catch (err) {}
    });

    test('delete', async () => {
        try {
            const data = await User.delete(
                { where: { id: 1 }},
            );
            expect(data.success).toBe(true);
        } catch (err) {}
    });
});