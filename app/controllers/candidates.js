const { Candidate, Opportunity } = require('../models');
const messages = require('../../config/messages');

module.exports = {
    async index(req, res) {
        try {
            const candidates = await Candidate.findAll({
                include: [
                    {
                        model: Opportunity, 
                        as: 'Opportunities',
                        through: { atributes: []},
                    },
                ],
            });
            return res.json({
                success: true,
                data: candidates
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
            const candidates = await Candidate.create(req.body);
            return res.json({
                success: true,
                data: candidates
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: messages.CANDIDATE_CREATED_FAILED
            });
        }
    },

    async show(req, res) {
        try {
            const candidates = await Candidate.findByPk(req.params.id);
            return res.json({
                success: true,
                data: candidates
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
            const candidates = await Candidate.update( 
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
                message: messages.CANDIDATE_UPDATED_FAILED
            });
        }
    },

    async destroy(req, res) {
        try {
            const candidates = await Candidate.destroy({where: {id: req.params.id}});
            return res.json({
                success: true, 
                message: messages.CANDIDATE_DELETED_SUCCESSFULLY
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: messages.CANDIDATE_DELETED_FAILED
            });
        }
    }
}

