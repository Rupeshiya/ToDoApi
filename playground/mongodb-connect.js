// var MongoClient = require('mongodb').MongoClient;
/////////////////////////////////////////////////////////////
//es6 way=>
var {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/mydb',(err,db)=>{
  if(err)
  {
    return console.log('error');
  }else {
    /////query here
    console.log('connected');
  }
  db.close();
});
