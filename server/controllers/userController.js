import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Signup a new user
export const signup = async (req, res)=>{
    const {fullName, email, password, bio} = req.body;

    try {
        if(!fullName || !email || !password || !bio){
            return res.json({success:false, message: "Missing Details"})
        }
        //await always return promise ki task complete hua ki nahi hua
        const user = await User.findOne({email}) // yeha pe database se email find ho raha hai

        if(user){ // agar database me email find hogaya tho 
            return res.json({success:false, message: "Account already exists"})
        }
        const salt = await bcrypt.genSalt(10) // that is generate salt
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create({  // It will create a new User in database.
            fullName,email,password: hashedPassword, bio
        });

       const token = generateToken(newUser._id) // yeha pe newUser ka id send karo aur ye function generatetoken wala utils file me se new token generate karke de dega.
       res.json({success:true, userData:newUser,token,message: // send response from back-> front ie, newUser data , token and message
        "Account Created Successfully" 
       })

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message: error.message})
    }
}

// Controller to login a user
export const login = async (req,res) =>{
    try {
        const {email, password} = req.body;
        const userData = await  User.findOne({email})

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if(!isPasswordCorrect){
            return res.json({success:false, message:"Invalid credentials"});
        }

        const token = generateToken(userData._id)
        res.json({success:true, userData,token,message:"Login Successfully"})

    } catch (error) {
        console.log(error.message)
        res.json({success:false, message: error.message})
    }
}

// Controller to update user profile details

export const updateProfile = async (req,res)=>{
    try {
        const {profilePic, bio, fullName} = req.body;

        const userId = req.user._id; // req.user ->ye auth middelware se hoke aayaa hai
        let updatedUser;

        if(!profilePic){
            // updatedUser = await User.findByIdAndUpdate(userId, {bio, fullName},
            //     {new:true});
            updatedUser = await User.findByIdAndUpdate(
                userId,
                { bio, fullName },
                {
                    returnDocument: "after"
                }
            );
        } else {
            const upload = await cloudinary.uploader.upload(profilePic);

            updatedUser = await User.findByIdAndUpdate(userId, {profilePic: upload.secure_url, bio, fullName}, {new:true});

        }

        res.json({success:true, user: updatedUser})

    } catch (error) {
        console.log(error.message)
        res.json({success:false, message: error.message})
    }
}