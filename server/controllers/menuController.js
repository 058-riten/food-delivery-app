const Menu = require('../models/menuModel')

exports.createItem = async (req, res) => {
    try {
        const menuItem = await Menu.create(req.body);
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getMenuById = async (req, res) => {
    try {
        const menuItem = await Menu.findById(req.params.id);
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(404).json({ message: 'Menu item not found' });
    }
};