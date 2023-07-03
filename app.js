const express = require('express');
const ejs = require('ejs');
let uiRoute = require('./routes/ui')
let app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/user',uiRoute);
app.listen(8080,()=>{console.log('listen on 8080')});