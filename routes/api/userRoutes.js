const router = require('express').Router();

// Importing controller functions
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    addFriend,
    deleteUsers,
    deleteFriend
  } = require('../../controllers/usersControllers.js');

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUsers);

// /api/users/:id
router
    .route('/:id')
    .get(getUsersById)
    .put(updateUsers)
    .delete(deleteUsers);

// /api/users/:userId/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .put(addFriend)
    .delete(deleteFriend)

module.exports = router; 