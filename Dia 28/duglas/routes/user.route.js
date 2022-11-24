const express = require ('express');
const router = express.Router();
const { getUser, createUser, getUserById, updateUser, deleteUser } = require ('../controllers/user.controller')

router.get('/user', getUser);

router.get('/user/:id', getUserById);

router.post('/user', createUser);

router.put('/user', updateUser);

router.delete('/user', deleteUser);

module.exports = router;