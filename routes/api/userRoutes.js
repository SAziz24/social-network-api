const router = require('express').Router();

// Importing controller functions
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    deleteUser,
    deleteFriend
  } = require('../../controllers/userControllers.js');

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .put(addFriend)
    .delete(deleteFriend)

module.exports = router; 