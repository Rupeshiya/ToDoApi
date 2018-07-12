var {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/mydb',(err,db)=>{
  if(err)
  {
    console.log('error');
  }
  else {
    console.log('connected');
    /////////////////////////////////////////////////////////////////////////
    //update();
    // db.collection('mydb').update({name:'hello'},{$set:{name:'rupeshiya',age:21}}).then((result)=>{
    //   console.log(result.result);
    // },(err)=>{
    //   if(err)
    //   {
    //     console.log('error');
    //   }
    //   else {
    //     console.log('updated successfully');
    //   }
    // });
    ////////////////////////////////////////////////////////////////////////////
    //findOneAndUpdate();
    db.collection('mydb').findOneAndUpdate({name:'hello'},{$set:{name:'rupeshiya'}},{returnOriginal: false}).then((res)=>{
      console.log(res);
    },(err)=>{
      if(err)
      {
        console.log('error');
      }
      else {
        console.log('updated successfully');
      }
    });
    db.close();
  }
});
