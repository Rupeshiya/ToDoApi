var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/todo');
module.exports = {mongoose};
//
// var todo = mongoose.model('todo',{
//   text:{
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
// //
// var newTodo = new todo({
//   text: 'hello'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('saved todo',doc);
// },(error)=>{
//   console.log('unable to make todo');
// });

// var othertodo = new todo({
//   text:'hard',
//   completed: true,
//   completedAt:123
// });
// othertodo.save().then((doc)=>{
//   console.log(doc);
// },(error)=>{
//   console.log('error');
// });
