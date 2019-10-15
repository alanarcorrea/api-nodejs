const { Opportunity, Candidate } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const opportunities = await Opportunity.findAll({
                include: [
                    {
                        model: Candidate,
                        as: 'candidates',
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
                message: 'Error...'
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
                message: 'Error...'
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
                message: 'Error...'
            });
        }
    },

    async update(req, res) {
        try {
            const opportunities = await Opportunity.update( req.body, 
                                    {where: {id: req.params.id }},
                                    {new: true});
            return res.json({
                success: true,
                data: opportunities
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
            const opportunities = await Opportunity.destroy({where: {id: req.params.id}});
            return res.json({
                success: true,
                data: opportunities
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

