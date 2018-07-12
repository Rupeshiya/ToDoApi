var express = require('express');
var bodyParser = require('body-parser');

// var {mongoose} = require('./db/mongoose.js');
// var {todo} =  require('./models/todo.js');
// var {user} = require('./models/user.js');

var {mongoose} = require('./db/mongoose.js');
var {todo} =  require('./models/todo.js');
var {user} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());


app.post('/todos',(req,res)=>{
  var Todos = new todo({
    text: req.body.text
  });
  Todos.save().then((doc)=>{
    console.log(doc);
  },(e)=>{
    res.send('error');
  });
});


// app.get('/todo',(req,res)=>{
//
// });

var port = process.env.PORT || 4000;
app.listen(4000,()=>{
  console.log(`started on ${port} `);
});
