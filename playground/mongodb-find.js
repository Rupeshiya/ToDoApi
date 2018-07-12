// var MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/mydb',(err,db)=>{
  if(err)
  {
    return console.log('error');
  }else {
    console.log('connected');

    
    /////////////////////////////////////////////////////////////////
    //find


    db.collection('mydb').find({age:20}).toArray().then((docs)=>{
      console.log(docs.length);
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log('error');
    });


  }
  db.close();
});
