const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

// const me = new User({
//   name: 'Radu',
//   age: 40
// })
// me.save().then(() => {
//   console.log(me);
// }).catch(error => {
//   console.log('Error!', error);
// })

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const task1 = new Task({
  description: 'First Task',
  completed: false
});

task1.save().then(() => {
  console.log(task1);
}).catch(error => {
  console.log(error);
})