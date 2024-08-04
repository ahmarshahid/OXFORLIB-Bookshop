import Contact from "../model/contact.model.js";
//import User from "../model/user.model.js";


export const contactfunc = async(req,res)=>{
    try {
        const{fullname, email,message} = req.body;
        //const user = await User.findOne({email});
        const CheckedUser = await Contact.findOne({email});
        if(CheckedUser){
            return res.status(400).json({message: "User has Already Submitted his Response"})
        }
        const NewMessage = new Contact({
            fullname,
            email,
            message,
        });
        await NewMessage.save()
        res.status(201).json({message: "Response Submitted Sucessfully"});
    } 
    catch (error) {
         console.log("Error : " + error.message);
        res.status(500).json({message :"Internal server error dectected !"})

    }
};