const { Application, Candidate, Opportunity } = require('../models');
const messages = require('../../config/messages');

module.exports = {
    async index(req, res) {
        try {
            const applications = await Application.findAll({
                include: [
                    { model: Candidate },
                    { model: Opportunity }
                ]
            });
            return res.json({
                success: true,
                data: applications
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: messages.GENERIC_ERROR
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
                message: messages.APPLICATION_CREATED_FAILED
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
                message: messages.GENERIC_ERROR
            });
        }
    },

    async update(req, res) {
        try {
            const applications = await Application.update(
                req.body, 
                { where: { id: req.params.id }},
                { new: true }
            );
            return res.json({
                success: true,
                data: req.body
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: messages.APPLICATION_UPDATED_FAILED
            });
        }
    },

    async destroy(req, res) {
        try {
            const applications = await Application.destroy({where: {id: req.params.id}});
            return res.json({
                success: true, 
                message: messages.APPLICATION_DELETED_SUCCESSFULLY
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: messages.APPLICATION_DELETED_FAILED
            });
        }
    }
}

