const { MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to serve'.err);
    }
    console.log('Connected succesfully');
    
    const db =client.db('TodoApp');

    // db.collection('Users').find({
    //     _id:new ObjectID('5b6d2d77ac8a461e1e2288b2')
    // }).toArray().then((docs)=>{
    //     console.log('Users');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err,)=>{
    //     console.log('Unable to fetch record');
    // })
    // db.collection('Users').find().count().then((count)=>{
    //     console.log(`Total Users: ${count}`);        
    // },(err,)=>{
    //     console.log('Unable to fetch record');
    // })

    db.collection('Users').find({location:'Ahmedabad'}).toArray().then((userData)=>{
       console.log(userData) ;
    },(err)=>{
        console.log('Unable to fetch record');
    });
});