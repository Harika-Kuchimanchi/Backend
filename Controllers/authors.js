const db = require('../db');
const { eq } = require('drizzle-orm');
const AuthorsTable = require('../Models/authors.model.js');
const BooksTable = require('../Models/books.model.js');

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await db.select().from(AuthorsTable);
        return res.json(authors);
    } catch (error) {
        console.error('Error fetching authors:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getAuthorById = async (req,res)=>{
    const id = req.params.id;
    try {
        const author = await db.select().from(AuthorsTable).where(eq(AuthorsTable.id, id));
        if(!author){
            return res.status(404).json({error: 'Author not found'});
        }
        return res.json(author);
    } catch (error) {
        console.error('Error fetching author:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getBooksByAuthorId = async (req,res)=>{
    const id = req.params.id;
    try{
        const books = await db.select().from(BooksTable).where(eq(BooksTable.authorId, id));
        return res.json(books);
    } catch (error) {
        console.error('Error fetching books by author:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}