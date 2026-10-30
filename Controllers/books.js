const db = require('../db');
const { eq,sql } = require('drizzle-orm');
const BooksTable = require('../Models/books.model.js');
const AuthorsTable = require('../Models/authors.model.js');
exports.getAllBooks = async (req, res) => {
    const search = req.query.search;
    if (search) {
       const books = await db.select().from(BooksTable).where(sql`to_tsvector('english', ${BooksTable.title}) @@ to_tsquery('english', ${search})`);
       return res.json(books);
    }
    try {
        const books = await db.select().from(BooksTable);
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getBookById = async (req,res)=>{
    const id = req.params.id;
    try {
        const book = (await db.select().from(BooksTable).where(eq(BooksTable.id, id))).join(AuthorsTable,
            eq(BooksTable.authorId, AuthorsTable.id)
        );
        if(book.length === 0){
            return res.status(404).json({error: 'Book not found'});
        }
        res.json(book);
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.createBook = async (req,res) =>{
    const {title,authorId} = req.body;
    if(!title || !authorId){
        return res.status(400).json({error: 'Title and author ID are required'});
    }
    try{
        const newBook = await db.insert(BooksTable).values({title, authorId}).returning({id: BooksTable.id});
        res.status(201).json(newBook);
    }
 catch(err){
        console.error('Error creating book:', err);
        res.status(500).json({error: 'Internal server error'});
 }
}

exports.deleteBookById = async (req,res)=>{
    const id = req.params.id;
    try{
        const deleteBook = await db.delete(BooksTable).where(eq(BooksTable.id, id));
        if(deleteBook.count === 0){
            return res.status(404).json({error: 'Book not found'});
        }
        res.status(200).json({message: 'Book deleted successfully'});
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({error: 'Internal server error'});
    }
}