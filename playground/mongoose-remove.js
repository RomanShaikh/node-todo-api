var { mongoose} = require('../server/db/mongoose');
var { Todo} =require('../server/models/todo');
const {ObjectID} =require ('mongodb');


Todo.remove({}).then((result)=>{
    console.log(result);
});
