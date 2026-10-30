const express = require ('express');
const app = express();
const booksRoutes = require('./Routes/books.routes');
const authorsRoutes = require('./Routes/authors.routes');
app.use(express.json());
app.use('/books', booksRoutes);
app.use('/', authorsRoutes);
app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})