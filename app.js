const express = require('express');
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index'));

app.use((req, res, next)=>{
    let err = new Error('Forbidden 404');
    err.status = 404;
    err.myMessage = "I wanna cry..."

    next(err);

})

app.use((err, req, res, next) => {
    res.render('error',{ data: err, layout:'errorPage'});
    
})

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})
