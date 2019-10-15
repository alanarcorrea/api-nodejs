const { User } = require('../models');
const messages = require('../config/messages');

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
                message: messages.GENERIC_ERROR
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
                message: messages.USER_CREATED_FAILED
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
                message: messages.GENERIC_ERROR
            });
        }
    },

    async update(req, res) {
        try {
            const users = await User.update(
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
                message: messages.USER_UPDATED_FAILED
            });
        }
    },

    async destroy(req, res) {
        try {
            const users = await User.destroy({where: {id: req.params.id}});
            return res.json({
                success: true,
                message: messages.USER_DELETED_SUCCESSFULLY
            });
        } catch (error) {
            return res.json({
                success: false,
                error,
                message: messages.USER_DELETED_FAILED
            });
        }
    }
}