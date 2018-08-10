const { MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to serve'.err);
    }
    console.log('Connected succesfully');
    
    const db =client.db('TodoApp');
 
    // db.collection('Todos').deleteMany({text:'Nothing to do'}).then((result)=>{
    //     console.log(result);
    // })
    
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    })
});