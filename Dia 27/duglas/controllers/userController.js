const User = require('../models/user.model');

const getUsers = async (req, res) => {
    const user = await User.find();
    res.json(user);
}
const findByUser = async (req, res) => {

    const { id } = req.params;
    User.findById(id).then((data) => {
        res.json(data);
    }).catch(() => {
        res.json({ 'message': 'Id no encontrado' });
    })
}
const UpdateByUser = async (req, res) => {

    const { id } = req.params;
    await User.updateOne({ _id: id }, req.body);
    res.json({ 'message': 'Datos Modificados' });
}
const deleteByUser = async (req, res) => {
    const { id } = req.params;
    await User.remove({ _id: id });
    res.json({ 'message': 'Datos Eliminados' });
}
const createUser = async (req, res) => {
    const user = new User(req.body);
    user.save();
    res.json(user);
}
module.exports = { getUsers, createUser, findByUser, UpdateByUser, deleteByUser }