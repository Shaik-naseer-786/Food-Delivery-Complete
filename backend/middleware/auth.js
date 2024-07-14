import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// const authMiddleware = async (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.json({ success: false, message: "Not authorized, login again!" });
//   }

//   const token = authHeader.split(' ')[1];
//   if (!token) {
//     return res.json({ success: false, message: "Not authorized, login again!" });
//   }

//   try {
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await userModel.findById(token_decode.id);
//     if (!user) {
//       return res.json({ success: false, message: "User not exists!" });
//     }
//     req.body.userId = token_decode.id;
//     next();
//   } catch (error) {
//     console.log("Error decoding token:", error);
//     return res.json({ success: false, message: "Error!" });
//   }
// };
const authMiddleware=async(req,res,next)=>{
  const {token}=req.headers;
  if (!token){
    return res.json({success:false,message:"not authorized"})

  }
  try {
    const token_decode=jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId=token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"error"})
  }
}

export default authMiddleware;
