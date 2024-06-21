const express=require('express')
const router=express.Router()
const UserDetail=require('../model/userSchema')
const bodyParser=require('body-parser')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const authenticateToken=require('../jwtAuth')




//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())
router.use(cookieParser())




router.post('/signup',async(req,res)=>{
 
    try{
      const emailExist=await UserDetail.findOne({email:req.body.email})
      if(emailExist){
        return  res.status(400).json('email already exist')
      }
        const userData=new UserDetail({
            name:req.body.name,
            age:req.body.age,
            email:req.body.email,
            password:req.body.password
        })
        //or simply second method
       // const userData=new userSchema(req.body)
       const token= await userData.generateToken()

       const create= await UserDetail.create(userData)
       const options= {
        httpOnly:true,
        secure:true
       }
     if(create){
      return   res.status(200)
      .cookie("accessToken", token,options)
      .json(userData)
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
    console.log('login',password)
    if(!email ||  !password){
      return  res.status(400).json('please fill the form feilds')
    }
    const data= await UserDetail.findOne({email:email})
    if(!data){
      console.log('not find data')
      return  res.status(400).json('invalid login details')
    }

   
    const passwordMatch= await bcrypt.compare(password,data.password)
    const token=data.generateToken()
    const options= {
      httpOnly:true,
      secure:true
     }
     if(!passwordMatch){
      console.log('not match pwd')
     }

   

    if(passwordMatch){
        console.log('password match')
        return res.status(200).cookie("accessToken", token, options).json({
          id:data._id
        })
// console.log('okay')
        
    }else{
      return  res.status(400).json('invalid login details')
        console.log('not okay')
    }
  }
  catch(e){
    res.status(400).send(e)
  }
    
})




//Get the data
router.get('/usersData',async(req,res)=>{
 try{
  let Data=await UserDetail.find({},{password:0})
  if(Data){
   return  res.status(200).json({data:Data})

  }
    return res.status(400).json('data not found')
  
 }
 catch(e){
  res.status(400).json({msg:e})
 }

})





//Delete the data by id
router.delete('/deleteUser/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  
  await UserDetail.findByIdAndDelete({_id})
  

   return res.status(200).json({msg:'success'})
 
 }
 catch(e){
  res.status(400).json({
    msg:e
  })
 }
})







 

module.exports=router;