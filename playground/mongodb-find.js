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
    // db.collection('mydb').insertOne({"name":"hello","age":20},(err,res)=>{
    //   if(err)
    //   {
    //     console.log('error');
    //   }
    //   console.log(JSON.stringify(res.ops,undefined,2));
    // });
    // db.collection('user').insertMany([{
    //   "name":"world","age":21
    // },{"name":"rupeshiya","age":21}],(err,res)=>{
    //   if(err)
    //   {
    //     console.log('error');
    //   }
    //   else {
    //     console.log(JSON.stringify(res.ops,undefined,5));
    //   }
    // });
    db.collection('mydb').find({age:20}).toArray().then((docs)=>{
      console.log(docs.length);
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log('error');
    });

  }
  db.close();
});
