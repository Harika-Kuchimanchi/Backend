const express = require('express');
const router = express.Router();

const {getAllBooks,getBookById,createBook,deleteBookById} = require('../Controllers/books');

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.delete('/:id', deleteBookById);

module.exports = router;