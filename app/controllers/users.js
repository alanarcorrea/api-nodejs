const { User } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.json({
                success: true,
                data: users
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: 'Error...'
            });
        }
    },

    async store(req, res) {
        try {
            const users = await User.create(req.body);
            return res.json({
                success: true,
                data: users
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: 'Error...'
            });
        }
    },

    async show(req, res) {
        try {
            const users = await User.findByPk(req.params.id);
            return res.json({
                success: true,
                data: users
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: 'Error...'
            });
        }
    },

    async update(req, res) {
        try {
            const users = await User.update( req.body, 
                                    {where: {id: req.params.id }},
                                    {new: true});
            return res.json({
                success: true,
                data: users
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: 'Error...'
            });
        }
    },

    async destroy(req, res) {
        try {
            const users = await User.destroy({where: {id: req.params.id}});
            return res.json({
                success: true,
                data: users
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: 'Error...'
            });
        }
    }
}