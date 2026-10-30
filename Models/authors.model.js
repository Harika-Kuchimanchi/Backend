const {uuid,varchar,pgTable}= require('drizzle-orm/pg-core');

const authorsTable = pgTable('authors',{
    id:uuid().primaryKey().defaultRandom(),
    name:varchar({length:100}).notNull(),
    email:varchar({length:255}).notNull().unique(),
});

module.exports=authorsTable;