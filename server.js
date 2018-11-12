const express = require('express');
var app = express();
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.set('view-engine','hbs');

app.get('/',(req,res)=>{

    res.send("Hello Express!");
});

app.get('/home', (req,res)=>{

    res.render('home.hbs',{
        dynaText : "First Dynamic text"
    });
});


app.listen(3000);