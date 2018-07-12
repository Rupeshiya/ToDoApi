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

    ///////////////////////////////////////////////////////////////
    /////deleteMany

    // db.collection('mydb').deleteMany({name:'rupeshiya'}).then((res)=>{
    //   console.log(res.result);
    // },(err)=>{
    //   if(err)
    //   {
    //     console.log('err');
    //   }
    //   else {
    //     console.log('deleteMany');
    //   }
    // });
    //
    // ////////////////////////////////////////////////////////////////////
    // //deleteOne
    // db.collection('mydb').deleteOne({name:'rupeshiya'}).then((res)=>{
    //   console.log(res.result);
    // },(err)=>{
    //   if(err)
    //   {
    //     console.log('error');
    //   }
    //   else {
    //     console.log('deleteOne');
    //   }
    // });
    /////////////////////////////////////////////////////////////////////
    //findOneAndDelete
    db.collection('mydb').findOneAndDelete({name:'hello'}).then((res)=>{
      console.log(res);
    },(err)=>{
      if(err)
      {
        console.log('error');
      }
      else {
        console.log('deleted ');
      }
    })
  }
  db.close();
});
