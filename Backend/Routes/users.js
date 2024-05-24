const express=require('express')
const router=express.Router()
const UserDetail=require('../model/userSchema')
const bodyParser=require('body-parser')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
// In this way



//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())
router.use(cookieParser())




router.post('/signup',async(req,res)=>{
 
   
    try{
        const userData=new UserDetail({
            name:req.body.name,
            age:req.body.age,
            email:req.body.email,
            password:req.body.password
        })
        //or simply second method
       // const userData=new userSchema(req.body)
      //  const token= await userData.generateToken()
       const create= await UserDetail.create(userData)
     if(create){
      return   res.status(200).json(userData)
     }
        
    }
   
    catch(err){
    return  res.status(400).json('false')
    }
})


router.post('/login',async(req,res)=>{
  try{
    const email=req.body.email;
    const password=req.body.password;
    const data= await UserDetail.findOne({email:email})

   
    const passwordMatch= await bcrypt.compare(password,data.password)
  

    if(passwordMatch){
        
        return res.status(200).json({
          token:await data.generateToken(),
          id:data._id.toString()
        })
console.log('okay')
        
    }else{
      return  res.status(400).json('invalid login details')
        console.log('not okay')
    }
  }
  catch(e){
    res.status(400).send(e)
  }
    
})

module.exports=router;