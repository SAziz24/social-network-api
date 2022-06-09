const router = require('express').Router();

// Importing functions from thought controller
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    addReaction,
    deleteThoughts,
    deleteReaction
} = require('../../controllers/thoughtControllers.js');

// /api/thoughts
router.route('/')
      .get(getAllThoughts);

// /api/thoughts/:id
router.route('/:id')
      .get(getThoughtsById)
      .put(updateThoughts)
      .delete(deleteThoughts); 

// /api/thoughts/:userId
router.route('/:userId')    
      .post(createThoughts);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
      .post(addReaction);

// /api/thoughts/:thoughtId/reactionId
router.route('/:thoughtId/reactions/:reactionId')
      .delete(deleteReaction);

module.exports = router;