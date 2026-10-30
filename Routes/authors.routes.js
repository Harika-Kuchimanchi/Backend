const express = require('express');
const router = express.Router();
const {getAllAuthors,getAuthorById,getBooksByAuthorId} = require('../Controllers/authors');

router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.get('/:id/books', getBooksByAuthorId);
module.exports = router;