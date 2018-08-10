// const   MongoClient =require('mongodb').MongoClient;

const {MongoClient,ObjectID} =require('mongodb');

var obj =new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err){
    return console.log('Unable to connect to MongoDB server');
}
console.log('Connected successfully');

const db =client.db('TodoApp');


// db.collection('Todos').insertOne({
//     'text':'Something to do',
//     'completed':false
// },(err,result)=>{
//     if(err){
//         console.log('Unable to insert record',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });

// db.collection('Users').insertOne({
//     'name':'Kamran',
//     'age': 20,
//     'location': 'Ahmedabad'
// },(err,result)=>{
//     if(err){
//         console.log('Unable to insert record');
//     }
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
// });

client.close();
});