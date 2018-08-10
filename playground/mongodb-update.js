const { MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to serve'.err);
    }
    console.log('Connected succesfully');
    
    const db =client.db('TodoApp');
 
   db.collection('Users').findOneAndUpdate({
       _id:new ObjectID('5b6d3f753c557559d3616519')
   },{
        $inc:{
            age:-2,
        }
   },{
        returnOriginal:false    
   }).then((result)=>{
       console.log(result);
   })
});