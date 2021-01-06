const express = require('express');
const nav=[
    {link:'/books', name: 'Books' },
    {link: '/authors', name:"Authors"},
    {link: '/login', name:"Log In"},
    {link: '/signup', name:"Sign Up"}


];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);

//route handlers
const app = express();
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);

app.set('view engine', 'ejs'); 
app.set('views', __dirname+'/src/views');

app.use(express.static('./public'));

app.get('/',function(req, res){
    res.render('index',
    {
        nav,
        title:'Library'
    }
    );
});

app.listen(5007);

