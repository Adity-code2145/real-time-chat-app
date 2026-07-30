import jwt from "jsonwebtoken";

//Function to generate a token for a user
export const generateToken = (userId)=>{  // alag alag useId send karte raho token generate hote rahega
    const token = jwt.sign({userId}, process.env.JWT_SECRET);
    return token;
}