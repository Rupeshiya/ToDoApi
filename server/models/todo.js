var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var todo = mongoose.model('todo',{
  text:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
//
// var newTodo = new todo({
//   text: ''
// });
//
// newTodo.save().then((doc)=>{
//   console.log('saved todo',doc);
// },(error)=>{
//   console.log('unable to make todo');
// });

module.exports = {
  todo
};
