const { Candidate, Opportunity } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const candidates = await Candidate.findAll({
                include: [
                    {
                        model: Opportunity, 
                        as: 'opportunities',
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
                message: 'Error...'
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
                message: 'Error...'
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
                message: 'Error...'
            });
        }
    },

    async update(req, res) {
        try {
            const candidates = await Candidate.update( req.body, 
                                    {where: {id: req.params.id }},
                                    {new: true});
            return res.json({
                success: true,
                data: candidates
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
            const candidates = await Candidate.destroy({where: {id: req.params.id}});
            return res.json({
                success: true,
                data: candidates
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

