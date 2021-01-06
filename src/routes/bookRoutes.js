const express = require('express');
const booksRouter = express.Router();

function router(nav)
{ 
var books=[
    { 
    title: 'Tom and Jerry',
    author: 'Joseph Barbera', 
    genre: 'Cartoon',
    img:"tom.jpeg"
    },
    {
    title: 'Harry Potter',
    author: 'J K Rowling', 
    genre: 'Fantasy', 
    img: "harry.jpeg"
    },
    {    
    title: 'Paathumayude Aadu',
    author: 'Vaikom Muhammad Basheer',
    genre: 'Drama',
    img: "basheer.jpeg"
        
    }
]
booksRouter.get('/', function(req,res){
    res.render("books",
    {
        nav,
        title:'Books',
        books //books array
    }
    );//passed as object
});
booksRouter.get('/:id', function(req,res){
    const id=req.params.id;
    res.render("book",
    {
        nav,
        title:'Book',
        book: books[id]
    }
    );//passed as object
});
return booksRouter;
}//fn router ends

module.exports=router;//exporting to app.js