var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {todo} =  require('./models/todo.js');
var {user} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());

/////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////

app.get('/todos',(req,res)=>{
  todo.find().then((doc)=>{
    res.send(JSON.stringify(doc,undefined,2));
  },(e)=>{
    console.log('error');
  });
});

//////////////////////////////////////////////////////////////////////////

app.put('/todos/:text/:new',(req,res)=>{
  todo.update({text:req.params.text},{$set:{text:req.params.new}}).then((doc)=>{
    res.send(JSON.stringify(doc,undefined,2));
  },(e)=>{
    console.log('error');
    res.send('error');
  });
});

////////////////////////////////////////////////////////////////////////
app.delete('/todos/:text',(req,res)=>{
  todo.findOneAndDelete({text:req.params.text}).then((result)=>{
    res.send(result.result);
  },(e)=>{
    res.send('e');
  });
});
////////////////////////////////////////////////////////////////////////////

var port = process.env.PORT || 4000;
app.listen(port,()=>{
  console.log(`started on ${port} `);
});
