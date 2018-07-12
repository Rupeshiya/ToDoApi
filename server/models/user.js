var mongoose = require('mongoose');

var users = mongoose.model('users',{
  email:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});
// var newusers = new users({
//   email: 'rupeshiya@gmail.com'
// });
// newusers.save().then((doc)=>{
//   console.log(doc);
// },(error)=>{
//     console.log('error');
// });

module.exports = {
  users
};
