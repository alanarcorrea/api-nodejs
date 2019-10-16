const { Opportunity, Candidate } = require('../models');
const messages = require('../../config/messages');

module.exports = {
    async index(req, res) {
        try {
            const opportunities = await Opportunity.findAll({
                include: [
                    {
                        model: Candidate,
                        as: 'Candidates',
                        through: { attributes: [] },
                    },
                ],
            });
            return res.json({
                success: true,
                data: opportunities
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
            const opportunities = await Opportunity.create(req.body);
            return res.json({
                success: true,
                data: opportunities
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: messages.OPPORTUNITY_CREATED_FAILED
            });
        }
    },

    async show(req, res) {
        try {
            const opportunities = await Opportunity.findByPk(req.params.id);
            return res.json({
                success: true,
                data: opportunities
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: message.GENERIC_ERROR
            });
        }
    },

    async update(req, res) {
        try {
            const opportunities = await Opportunity.update( 
                req.body, 
                { where: { id: req.params.id }},
                { new: true });
            return res.json({
                success: true,
                data: req.body
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: messages.OPPORTUNITY_UPDATED_FAILED
            });
        }
    },

    async destroy(req, res) {
        try {
            const opportunities = await Opportunity.destroy({where: {id: req.params.id}});
            return res.json({
                success: true, 
                message: messages.OPPORTUNITY_DELETED_SUCCESSFULLY
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: messages.OPPORTUNITY_DELETED_FAILED
            });
        }
    }
}

