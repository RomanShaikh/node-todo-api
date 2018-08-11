var { mongoose} = require('../server/db/mongoose');
var { Todo} =require('../server/models/todo');
const {ObjectID} =require ('mongodb');

var id='5b6e8cc837299f279568c58611';

if(!ObjectID.isValid(id)){
    console.log('Not valid ID');
}

Todo.find({
    _id: id
}).then((doc)=>{
    console.log(doc);
});

Todo.findOne({
    _id: id
}).then((doc)=>{
    console.log(doc);
});

Todo.findById(id).then((doc)=>{
    console.log('This doc is : ',doc);
});