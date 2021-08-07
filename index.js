const express = require("express");

//Database
const database = require("./database");


//Initialise express
const booky = express();

//API to get all the books
/*
Route         /
Description   Get all the BOOKS
Access        Public
Parameter     None
Methods       GET
*/
booky.get("/",(req,res) =>{
  return res.json({books: database.books});
});

//API to get all the Specific book
/*
Route         /is
Description   Get all the specific book
Access        Public
Parameter     isbn
Methods       GET
*/

booky.get("/is/:isbn",(req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.ISBN === req.params.isbn
  );
  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for ISBN of ${req.params.isbn}`});
  }
  return res.json({book: getSpecificBook});
});


//API to get all the books by category
/*
Route         /c
Description   Get all the  specific books by category
Access        Public
Parameter     category
Methods       GET
*/

booky.get("/c/:category",(req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.category.includes(req.params.category)
  )

if(getSpecificBook.length === 0) {
  return res.json({error: `No book found for the category of ${req.params.category}`})
}

return res.json({book: getSpecificBook});
});


//API to get specific books by language
/*
Route         /ln
Description   Get all the  specific books by language
Access        Public
Parameter     language
Methods       GET
*/

booky.get("/ln/:language",(req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.language.includes(req.params.language)
  )

if(getSpecificBook.length === 0) {
  return res.json({error: `No book found for the category of ${req.params.language}`})
}

return res.json({book: getSpecificBook});
});


//API to get author
/*
Route         /author
Description   Get the author
Access        Public
Parameter     None
Methods       GET
*/

booky.get("/author",(req,res) => {
  return res.json({author: database.author});
});


//API to get author
/*
Route         /author/book
Description   Get the author
Access        Public
Parameter     isbn
Methods       GET
*/

booky.get("/author/book/:isbn",(req,res) => {
  const getSpecificAuthor = database.author.filter(
    (author) => author.books.includes(req.params.isbn)
  );
  if(getSpecificAuthor.length === 0) {
    return res.json({
      error: `No author found for the book of ${req.params.isbn}`});
  }
  return res.json({authors: getSpecificAuthor});
});

//API to get author
/*
Route         /author/book
Description   Get the author
Access        Public
Parameter     isbn
Methods       GET
*/


booky.get("/author/book/:id",(rer,res) => {
  const getSpecificAuthor = database.author.filter(
    (author) => author.books.includes(req.params.id)
  );
  if(getSpecificAuthor.length === 0) {
    return res.json({error: `No author found for the book of ${req.params.id}`});
  }
  return res.json({authors: getSpecificAuthor});
});

//API to get publication
/*
Route         /publication
Description   Get the publication
Access        Public
Parameter     None
Methods       GET
*/

booky.get("/publications",(req,res) => {
  return res.json({publications: database.publication});
});

//API to get specific publication
/*
Route         /publication
Description   Get the specific publication
Access        Public
Parameter     name
Methods       GET
*/


booky.get("/publications/:name",(req,res) =>{
  const getSpecificPublication = database.publication.filter(
    (publication) => publication.name.includes(req.params.name)
  );
  if(getSpecificPublication.length === 0) {
    return res.json({error: `No publication found for the book of ${req.params.name}`});
  }
  return res.json({publications: getSpecificPublication});
});


//API to get publication by books
/*
Route         /publication
Description   Get the publication by name of books
Access        Public
Parameter     books
Methods       GET
*/

booky.get("/publications/:books",(req,res) =>{
  const getSpecificPublication = database.publication.filter(
    (publication) => publication.books.includes(req.params.books)
  );
  if(getSpecificPublication.length === 0) {
    return res.json({error: `No publication found for the book of ${req.params.books}`});
  }
  return res.json({publications: getSpecificPublication});
});






booky.listen(3030,() => {
  console.log("Server is up and running");
});
