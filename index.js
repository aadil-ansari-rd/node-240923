const express = require('express');
const path = require('path');//path is in-built module
const student = require('./routes/student')
const app = express();

const connection = require('./connection');
connection();

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

app.use(student); //it will use router
app.listen(3001,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server is running on 3001');
    }
})