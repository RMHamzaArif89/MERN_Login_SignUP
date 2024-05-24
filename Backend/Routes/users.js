const express=require('express')
const router=express.Router()
const UserDetail=require('../model/userSchema')
const bodyParser=require('body-parser')
// In this way



//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())




router.post('/signup',async(req,res)=>{
 
   
    try{
        const userData=new UserDetail({
            name:req.body.name,
            age:req.body.age,
            email:req.body.email,
            number:req.body.number
        })
        //or simply second method
       // const userData=new userSchema(req.body)
        
        await UserDetail.create(userData)
        res.status(200).json(userData)
        
    }
   
    catch(err){
     res.send(err)
    }
})


router.get('/sign_up',(req,res)=>{
    
})

module.exports=router;