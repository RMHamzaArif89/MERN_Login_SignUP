//this collection will be use to find filter or search the products|data ...

const mongoose=require('mongoose')
const validator=require('validator')

const mernUser= new mongoose.Schema({
    //these are the names of input...name='name'
    name:{
        type:String,
        // required:true

    },
    age:{
        type:Number,
        // required:true

    },
    email:{
        type:String,
        // required:true

    },
    password:{
        type:String,
        // required:true

    },
    

})


// mongoose collection name specfied//created the new collection|table
const UserDetail= new mongoose.model("mern_userDetail",mernUser)

//export the schema that will be import in the main.js file
module.exports=UserDetail;
