import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async(req,res)=>{
    try {
        const{fullname, email,password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message : "User Already Exist !"})
        }
        const EncryptedPassword = await bcryptjs.hash(password,10);
        const NewUser = new User({
         fullname: fullname,
           email: email,
           password: EncryptedPassword,
        })
       await NewUser.save()
        res.status(201).json({message: "User registered sucessfully",user:{
            _id: NewUser._id,
            fullname: NewUser.fullname,
            email: NewUser.email,
        }});
    } 
    catch (error) {
        console.log("Error : " + error.message);
        res.status(500).json({message :"Internal server error dectected !"})
    }
};

export const signin = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch || !user){
            return res.status(400).json({message: "Invalid username or password"});
        }
        else{
            res.status(200).json({
                message: "Login Sucessfully",
                user :{
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
        }
        
    } catch (error) {
     console.error("Error: "+ error);
     return res.status(500).json({message: "Internal server error detected !"})   
    }
};