const { Application } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const applications = await Application.findAll();
            return res.json({
                success: true,
                data: applications
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
            const applications = await Application.create(req.body);
            return res.json({
                success: true,
                data: applications
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
            const applications = await Application.findByPk(req.params.id);
            return res.json({
                success: true,
                data: applications
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
            const applications = await Application.update( req.body, 
                                    {where: {id: req.params.id }},
                                    {new: true});
            return res.json({
                success: true,
                data: applications
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
            const applications = await Application.destroy({where: {id: req.params.id}});
            return res.json({
                success: true,
                data: applications
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

